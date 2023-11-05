import {
  Alert,
  Box,
  IconButton,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import * as React from "react";
import { API_URL } from "../../routes/Url";
import { Download } from "@mui/icons-material";

const Invoices = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [invoices, setInvoices] = React.useState<any[] | undefined>();

  const getOrders = async () => {
    try {
      const response = await axios({
        method: "get",
        url: API_URL + "/invoices",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      setIsLoading(false);
      setErrorMessage("");
      setInvoices(response.data);
    } catch (e: any) {
      setIsLoading(false);
      setErrorMessage("Une erreur est survenue lors de la récupération des factures.");
    }
  };

  React.useEffect(() => {
    getOrders();
  }, []);

  return (
    <Box>
      {!!errorMessage && <Alert severity="warning">{errorMessage}</Alert>}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Download</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading && <LinearProgress />}
            {!!invoices &&
              invoices.map((row) => (
                <TableRow key={row.date}>
                  <TableCell component="th" scope="row">
                    {row.date.toString()}
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.totalAmount.toFixed()}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>
                    <IconButton>
                      <Download />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Invoices;
