import React, { useEffect, useState } from "react";
import userIcon from "../assets/icons/users.png";
import storageIcon from "../assets/icons/storage.png";
import cloudIcon from "../assets/icons/cloud.png";

import { Outlet } from "react-router-dom";
// import { baseConfig } from "../../config";
import {
  View,
  Grid,
  Flex,
  Card,
  Placeholder,
  useTheme,
} from "@aws-amplify/ui-react";

import "./DashBoardLayout.css";


import OverviewUsers from "../pages/DashBoard/OverviewUsers";

import CustomersSummary from "../pages/DashBoard/CustomersSummary";
import axios from "axios";
import { request } from "../Config/request";






export interface LayoutProps {
  children?: React.ReactNode;
}
/// Mock Data
const customersData = [
  {
    name: "New Customers",
    data: [50, 60, 140, 190, 180, 230],
  },
];
const getChartData = () =>
  new Promise((resolve, reject) => {
    if (!customersData) {
      return setTimeout(() => reject(new Error("no data")), 750);
    }

    setTimeout(() => resolve(Object.values(customersData)), 750);
  });

const DashboardLayout = () => {

  const [barChartData, setBarChartData] = useState<any | null>(null);
  const [trafficSourceData, setTrafficSourceData] = useState<any | null>(null);
  const { tokens } = useTheme();

  useEffect(() => {
    const doChartData = async () => {
      const result = await getChartData();
      setBarChartData(result);
      setTrafficSourceData([112332, 123221, 432334, 342334, 133432]);
    };

    doChartData();
  }, []);



  const [userCount, setUserCount] = useState<number | null>(null);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Your mock response (replace this with your actual API call)
        const response = {
          user: 3,
          files: 1,
          fileUpladToday: 0
        };
  
        // Get the user count from the response
        const count = response.user;
        setUserCount(count);
       console.log(count)
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  
    fetchUsers();
  }, []);
  


  

  return ( <>
   

    <div className="layout-container">
    
    
      <div className="page-container">
        <div className="welcome-container">Welcome to your administrator space. 
      
Here, you can view all the activity on your website.</div>

<div className = "overview-container">Overview
 

      <div className="grid_list">
      
      <View rowSpan={{ base: 1, large: 1 }}>
  <OverviewUsers
    amount={userCount !== null ? userCount.toString() : ''}
    icon={<img src={userIcon} />}
  />


            
          </View>
          <View rowSpan={{ base: 1, large: 1 }}>
            <OverviewUsers amount="251,607"  icon =  {<img src={storageIcon}/>} />
          </View>
          <View rowSpan={{ base: 1, large: 1 }}>
            <OverviewUsers
              
              amount="23,762"
              icon =  {<img src={cloudIcon}/>}
            />
          </View>
         
          </div>
          </div>

          <View rowSpan={{ base: 1, large: 4 }}>
            <Card height="100%" borderRadius="15px">
              <div className="card-title">New Customers</div>
              <div className="chart-wrap">
                {barChartData ? (
                  <div className="row">
                    <CustomersSummary
                      title="CutomersSummary"
                      data={customersData}
                      type="line"
                      labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
                    />
                  </div>
                ) : (
                  <Flex direction="column" minHeight="285px">
                    <Placeholder size="small" />
                    <Placeholder size="small" />
                    <Placeholder size="small" />
                    <Placeholder size="small" />
                  </Flex>
                )}
              </div>
            </Card>
          </View>



 
      {/* <View rowSpan={{ base: 1, large: 4 }}>
            <Card height="100%" borderRadius="15px">
              <div className="card-title">Traffic Sources</div>
              <div className="chart-wrap">
                {barChartData ? (
                  <TrafficSources
                    title="Traffic Sources"
                    data={trafficSourceData}
                    type="donut"
                    labels={[
                      "Direct",
                      "Internal",
                      "Referrals",
                      "Search Engines",
                      "Other",
                    ]}
                  />
                ) : (
                  <Flex direction="column" minHeight="285px">
                    <Placeholder size="small" />
                    <Placeholder size="small" />
                    <Placeholder size="small" />
                    <Placeholder size="small" />
                  </Flex>
                )}
              </div>
            </Card>
          </View> */}
    
   
    
      {/* {baseConfig.footer ? <Footer /> : <></>} */}
      </div>
    </div>
    </>
  );
};

export default DashboardLayout;
