import react, { useState, useEffect } from "react";
import styled from "styled-components";
import Contact from "../Components/Contact.js";
import Link from "next/link";
import { AiFillPhone, AiOutlineInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { RiMapPin2Fill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import contactPageBackground from "../public/Images/contactPageBackground.png";
import emailjs from "emailjs-com";
import Head from "next/head";

const ContactWrap = styled.div`
  height: 100vh;
  width: auto;
  background: #000;
  display: flex;
  background: ${`url(${contactPageBackground.src})`};
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1150px) {
    height: auto;
    padding: 120px 8px;
  }
`;
const ContactContainer = styled.div`
  width: auto;
  background: #fff;
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media screen and (max-width: 1150px) {
    flex-direction: column;
  }
`;
const ContactInfoWrap = styled.div`
  padding: 40px;
  background-image: linear-gradient(to right, #8e2de2, #4a00e0);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 650px) {
    padding: 20px;
  }
`;
const ContactHeading = styled.h1`
  font-family: degular-display, sans-serif;
  color: #fff;
  font-size: 3em;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 5px;

  @media screen and (max-width: 650px) {
    font-size: 2.5em;
  }
`;
const ContactSubheading = styled.text`
  font-family: lato, serif;
  font-size: 1.1em;
  color: #fff;
  font-weight: 300;
`;
const ContactWrapper = styled.div`
  width: auto;
  margin-top: 0px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const IconWrap = styled.div`
  color: #fff;
  font-size: 2.2em;
  padding-right: auto;
  margin-right: 20px;
  display: flex;
  align-items: center;
`;
const SocialIconWrap = styled.div`
  color: #fff;
  font-size: 1.8em;
  padding-right: auto;
  margin-right: 5px;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background: #ff3e05;
    color: #000;
    transition: all 0.3s ease-in;
  }
`;
const DirectContactWrap = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  cursor: pointer;
`;
const DirectContactText = styled.text`
  color: #fff;
  font-family: lato, serif;
  letter-spacing: -0.5px;
  font-size: 1.2em;
  font-weight: 400;
`;
const ContactFormWrap = styled.form`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 650px) {
    padding: 20px;
    align-items: center;
  }
`;
const HorizontalWrap = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
const SubmitButton = styled.button`
  width: auto;
  padding: 8px 28px;
  font-family: degular-display, sans-serif;
  font-size: 1.5em;
  border: none;
  background: #000;
  color: #fff;
  line-height: 32px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    color: #000;
    background: #ff3e05;
    transition: all 0.3s ease-out;
  }
`;

const SucessMessage = styled.div`
  font-size: 1em;
  color: #fff;
  font-style: italic;
  background: #ff3e05;
  padding: 20px;
  margin-top: 10px;
`;

const Contact = () => {
  const [sucessMessage, setSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_924otss",
        "template_ydplxei",
        e.target,
        "user_x2vOJw9dQBquXNZHnAmrG"
      )
      .then((res) => {
        console.log(res);
        setSuccessMessage(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <title>
          Raj Mahil Portfolio | Creative Web Developer & designer from Canada
        </title>
        <meta name="description" content="meta description"></meta>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="OG title" />
        <meta property="og:url" content="url" />
        <meta property="og:description" content="OG Description" />
        <meta property="og:image" content="OG  Image" />
        <meta property="og:type" content="article" />
      </Head>
      <ContactWrap>
        <ContactContainer>
          <ContactInfoWrap>
            <ContactWrapper>
              <ContactHeading>Contact Information</ContactHeading>
              <ContactSubheading>
                Fill out the form and I will get back to you within 24 hours.
              </ContactSubheading>
            </ContactWrapper>
            <ContactWrapper>
              <Link passHref href="tel:306-716-3130">
                <DirectContactWrap>
                  <IconWrap>
                    <AiFillPhone />
                  </IconWrap>
                  <DirectContactText>1+ 306-716-3130</DirectContactText>
                </DirectContactWrap>
              </Link>
              <Link passHref href="mailto:hello@rajmahil.com">
                <DirectContactWrap>
                  <IconWrap>
                    <MdEmail />
                  </IconWrap>
                  <DirectContactText>hello@rajmahil.com</DirectContactText>
                </DirectContactWrap>
              </Link>
              <Link passHref href="/">
                <DirectContactWrap>
                  <IconWrap>
                    <RiMapPin2Fill />
                  </IconWrap>
                  <DirectContactText>1011 Idylwyld dr. North</DirectContactText>
                </DirectContactWrap>
              </Link>
            </ContactWrapper>
            <ContactWrapper
              style={{ flexDirection: "row", marginBottom: "5px" }}
            >
              <SocialIconWrap>
                <FaFacebookF />
              </SocialIconWrap>
              <SocialIconWrap>
                <AiOutlineInstagram />
              </SocialIconWrap>
              <SocialIconWrap>
                <GrLinkedinOption />
              </SocialIconWrap>
            </ContactWrapper>
          </ContactInfoWrap>
          <ContactFormWrap onSubmit={sendEmail}>
            <HorizontalWrap>
              <TextField
                required
                id="standard-required"
                label="First Name"
                type="text"
                name="firstName"
                variant="standard"
                sx={{
                  width: "250px",
                  marginRight: "20px",
                  marginBottom: "20px",
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#ff3e05",
                  },
                  "& label.Mui-focused": {
                    color: "#000",
                  },
                  "& .MuiOutlinedInput-input": {
                    fontFamily: "lato,sans-serif",
                    fontWeight: "500",
                    lineHeight: "40",
                  },
                }}
              />
              <TextField
                required
                id="standard-required"
                label="Last Name"
                variant="standard"
                type="text"
                name="lastName"
                sx={{
                  width: "250px",

                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#ff3e05",
                  },
                  "& label.Mui-focused": {
                    color: "#000",
                  },
                  "& .MuiOutlinedInput-input": {
                    fontFamily: "lato,sans-serif",
                    fontWeight: "500",
                    lineHeight: "40",
                  },
                }}
              />
            </HorizontalWrap>
            <HorizontalWrap>
              <TextField
                required
                id="standard-required"
                label="Email"
                variant="standard"
                type="email"
                name="email"
                sx={{
                  width: "250px",
                  marginRight: "20px",
                  marginBottom: "10px",
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#ff3e05",
                  },
                  "& label.Mui-focused": {
                    color: "#000",
                  },
                  "& .MuiOutlinedInput-input": {
                    fontFamily: "lato,sans-serif",
                    fontWeight: "500",
                    lineHeight: "40",
                  },
                }}
              />
              <TextField
                required
                id="standard-required"
                label="Phone"
                variant="standard"
                type="tel"
                name="phone"
                sx={{
                  width: "250px",
                  "& .MuiFormControl": {
                    marginRight: "10px",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#ff3e05",
                  },
                  "& label.Mui-focused": {
                    color: "#000",
                  },
                  "& .MuiOutlinedInput-input": {
                    fontFamily: "lato,sans-serif",
                    fontWeight: "500",
                    lineHeight: "40",
                  },
                }}
              />
            </HorizontalWrap>
            <FormControl style={{ marginTop: "20px", marginBottom: "20px" }}>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{ color: "#000", "&.Mui-focused": { color: "#000" } }}
              >
                What services are you looking for?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                name="services"
                sx={{
                  color: "#000",
                  "&.MuiSvgIcon-root": {
                    color: "green",
                  },
                }}
              >
                <FormControlLabel
                  value="Web Development"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#ff3e05",
                          border: "#000",
                        },
                      }}
                    />
                  }
                  label="Web Development"
                />
                <FormControlLabel
                  value="Digital Marketing"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#ff3e05",
                          border: "#000",
                        },
                      }}
                    />
                  }
                  label="Digital Marketing"
                />
                <FormControlLabel
                  value="Other"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#ff3e05",
                          border: "#000",
                        },
                      }}
                    />
                  }
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              required
              id="standard-required"
              label="Your Message"
              variant="standard"
              name="message"
              sx={{
                width: "100%",
                "& .MuiInput-input": {
                  paddingBottom: "75px",
                },
                "& .MuiFormControl": {
                  marginRight: "10px",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#ff3e05",
                },
                "& label.Mui-focused": {
                  color: "#000",
                },
                "& .MuiOutlinedInput-input": {
                  fontFamily: "lato,sans-serif",
                  fontWeight: "500",
                  lineHeight: "40",
                },
              }}
            />
            {sucessMessage ? (
              <SucessMessage>
                Your message has been sent. I`&apos;`ll be in touch soon! :)
              </SucessMessage>
            ) : (
              <SubmitButton type="submit">Submit</SubmitButton>
            )}
          </ContactFormWrap>
        </ContactContainer>
      </ContactWrap>
    </>
  );
};

export default Contact;
