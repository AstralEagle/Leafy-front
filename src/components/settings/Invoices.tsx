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
import { connectedUser } from "../../Config/Auth";
import { COLORS } from "../../style/colors";

const Invoices = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [invoices, setInvoices] = React.useState<any[] | undefined>();

  const user = connectedUser();

  const getInvoices = async () => {
    try {
      const response = await axios({
        method: "get",
        url: API_URL + "/invoices/?userId=" + user?.id,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      setIsLoading(false);
      setErrorMessage("");
      setInvoices(response.data.invoices);
    } catch (e: any) {
      if (e.status !== 404) {
        setErrorMessage("Une erreur est survenue lors de la récupération des factures.");
      }
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getInvoices();
  }, []);

  return (
    <Box sx={{ minWidth: "50vw", maxHeight: "75vh", overflowY: "hidden" }}>
      {!!errorMessage && <Alert severity="warning">{errorMessage}</Alert>}
      <TableContainer sx={{ borderRadius: "1rem", maxHeight: "75vh", overflowY: "auto" }}>
        <Table sx={{ borderRadius: "1rem", border: "none", borderSpacing: "0 1rem", borderCollapse: "separate" }}>
          <TableHead sx={{ borderRadius: "1rem", border: "none" }}>
            <TableRow sx={{ borderRadius: "1rem", border: "none" }}>
              <TableCell sx={{ border: "none", fontWeight: 600, color: COLORS.darkBlue }} align="center">
                Date
              </TableCell>
              <TableCell sx={{ border: "none", fontWeight: 600, color: COLORS.darkBlue }} align="center">
                Price
              </TableCell>
              <TableCell sx={{ border: "none", fontWeight: 600, color: COLORS.darkBlue }} align="center">
                Quantity
              </TableCell>
              <TableCell sx={{ border: "none", fontWeight: 600, color: COLORS.darkBlue }} align="center">
                Download
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ borderRadius: "1rem", border: "none" }}>
            {isLoading && <LinearProgress />}
            {!!invoices &&
              invoices.map((invoice) => (
                <TableRow key={invoice.id} sx={{ borderRadius: "1rem", background: "#E8ECEF", border: 0 }}>
                  <TableCell
                    sx={{ border: "none", borderRadius: "1rem 0 0 1rem" }}
                    align="center"
                    component="th"
                    scope="row"
                  >
                    {new Date(invoice.date).toString()}
                  </TableCell>
                  <TableCell sx={{ border: "none" }} align="center">
                    {invoice.totalAmount?.toFixed(2)} €
                  </TableCell>
                  <TableCell sx={{ border: "none" }} align="center">
                    {invoice.quantity} Go
                  </TableCell>
                  <TableCell sx={{ border: "none", borderRadius: "0 1rem 1rem 0" }} align="center">
                    <IconButton sx={{ color: COLORS.deepBlue }}>
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
