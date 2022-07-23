import {
  Container,
  Box,
  Flex,
  Heading,
  Button,
  Text,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer";
import NavbarMain from "../Components/NavbarMain";

const HomePage = () => {
  const activeStyle = {
    color: "white",
    textDecoration: "none",
    backgroundColor: "#fa5d00",
  };
  const style = {
    color: "white",
    backgroundColor: "#fa5d00",
  };
  return (
    <>
      <NavbarMain />
      <Container bgColor="#fff8f1" maxW="100%" padding="2% 1% 2% 5%">
        {/* --------------------------Hero section--------------------- */}
        <Box>
          <Flex justify="space-between">
            <Box w="49%" padding="0% 2% 1% 0%" textAlign="left">
              <Box>
                <Box w="80%">
                  <Flex gap="1rem">
                    <Box>
                      <img
                        src="//res.cloudinary.com/spiralyze/image/upload/v1651731006/Harvest/1001-Harvest-Home-SPZ-Hero/Rate_stars.svg"
                        alt="Review Stars"
                        class="review-img"
                      ></img>
                    </Box>
                    <Flex w="40%" gap="2%">
                      <Box fontSize="18px">
                        <b>4.6</b>
                      </Box>
                      <Box color="#777571" fontSize="18px">
                        (491 reviews)
                      </Box>
                    </Flex>
                  </Flex>
                </Box>
              </Box>
              <br />
              <br />
              <Box w="110%">
                <Heading
                  fontWeight="simple"
                  size="3xl"
                  color="#1d1e1c"
                  textAlign="left"
                  fontFamily="Georgia, MuotoWeb,sans-serif, Monarch"
                >
                  Finally, time tracking your team actually wants to use
                </Heading>
              </Box>

              <br />
              <Flex direction="column" gap="1.5rem">
                <Box>
                  <Flex gap="1rem" fontSize="18px">
                    <Box marginTop="5px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-check-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </Box>
                    <Box>
                      <b>Time Tracking.</b>{" "}
                      <span style={{ color: "#777571" }}>
                        Easy & intuitive time tracking that captures all your
                        time without changing the way you work.
                      </span>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Flex gap="1rem" fontSize="18px">
                    <Box marginTop="5px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-check-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </Box>
                    <Box>
                      <b>Reports & Analysis.</b>{" "}
                      <span style={{ color: "#777571" }}>
                        Instantly create reports across projects. Budgets, time,
                        team capacity, cost breakdowns, and more.
                      </span>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Flex gap="1rem" fontSize="18px">
                    <Box marginTop="5px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-check-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </Box>
                    <Box>
                      <b>Invoicing & Payments.</b>{" "}
                      <span style={{ color: "#777571" }}>
                        Turn tracked time into invoices. Accept online payments.
                        Sync with QuickBooks and Xero.
                      </span>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <NavLink to="/signup">
                    <Button
                      bgColor="#fa5d00"
                      color="white"
                      padding="7%"
                      borderRadius="15px"
                      fontSize="20px"
                      _hover={{ bg: "#fa5d00" }}
                    >
                      Get started
                    </Button>
                  </NavLink>
                  <br />
                  <br />
                  <Text fontSize="18px" color="#777571">
                    Free 30-day trial. No credit card required.
                  </Text>
                </Box>
                <Box></Box>
              </Flex>
            </Box>

            <Box w="75%" marginRight="-1%" height="650px" paddingTop="5%">
              <img
                width="100%"
                height="100%"
                src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1001-Harvest-Home-SPZ-Hero/desktop-hero-img.png"
                alt="laptop"
              />
            </Box>
          </Flex>
        </Box>
        <br />
        <br />
        {/* ----------------------------Section 2---------------------------- */}
        <Box>
          <Flex textAlign="left">
            <Box w="36%">
              <Text fontSize="22px">
                <span
                  style={{
                    color: "#fa5d00",
                    fontSize: "22px",
                    fontWeight: "medium",
                  }}
                >
                  70,000+
                </span>{" "}
                companies track time with Harvest
              </Text>
            </Box>
            <Box w="80%">
              <Divider
                w="100%"
                borderColor="#fa5d00"
                h={20}
                marginTop="-6.5%"
              />
            </Box>
          </Flex>
          <Flex gap="5rem" p="5%">
            <Box>
              <img
                alt="icon1"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize
"
              />
            </Box>
            <Box>
              <img
                alt="icon2"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize
"
              />
            </Box>
            <Box>
              <img
                alt="icon3"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize
"
              />
            </Box>
            <Box>
              <img
                alt="icon4"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize
"
              />
            </Box>
            <Box>
              <img
                alt="icon5"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize
"
              />
            </Box>
            <Box>
              <img
                alt="icon6"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize
"
              />
            </Box>
            <Box>
              <img
                alt="icon7"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize
"
              />
            </Box>
            <Box>
              <img
                alt="icon8"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize
"
              />
            </Box>
          </Flex>
          <Divider w="100%" borderColor="#fa5d00" h={5} />
        </Box>

        {/* -----------------------------Section 3------------------------- */}
        <Box padding="5% 0%">
          <Box
            fontSize="22px"
            textAlign="left"
            fontWeight="bold"
            color="#fa5d00"
          >
            FEATURES
          </Box>

          <Box>
            <Heading
              pt={5}
              fontWeight="light"
              size="2xl"
              color="#1d1e1c"
              textAlign="left"
              fontFamily="MuotoWeb,sans-serif, Monarch"
            >
              Everything you need to keep your team ticking
            </Heading>
          </Box>
          <br />
          <Box
            fontFamily="MuotoWeb,sans-serif, Monarch"
            fontSize="30px"
            color="#1d1e1c"
            textAlign="left"
          >
            Time tracking software that helps you keep time and get insights.
          </Box>
          <Flex></Flex>
          <Divider w="100%" borderColor="#fa5d00" h={5} />
        </Box>

        {/* -----------------------------Last section-------------------------- */}
        <Box padding="5% 0%">
          <Flex gap="4rem">
            <Box w="55%" textAlign="left">
              <Heading
                fontWeight="simple"
                size="2xl"
                color="#1d1e1c"
                textAlign="left"
              >
                Start tracking time today
              </Heading>
              <br />
              <Text fontSize="20px">
                Join 70,000+ companies spending their time wisely with harvest
              </Text>
              <br />
              <br />
              <Flex gap="2.5rem">
                <Box>
                  <NavLink
                    style={({ isActive }) => (isActive ? activeStyle : style)}
                    to="/signup"
                  >
                    <Button
                      bgColor="#fa5d00"
                      color="white"
                      padding="7%"
                      borderRadius="15px"
                      fontSize="20px"
                      _hover={{ bg: "#fa5d00" }}
                    >
                      Try Harvest for free
                    </Button>
                  </NavLink>
                </Box>
                <Box>
                  <Text fontSize="20px" color="#777571">
                    Free 30-day trial. No credit card required.
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Box w="40%">
              <img
                alt="compimg"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg"
              />
            </Box>
          </Flex>
        </Box>
        <br />
        <br />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
