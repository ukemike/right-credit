'use client';

import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  HStack,
  Badge,
  UnorderedList,
  ListItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const TermsAndConditions = () => {
  const lastUpdated = '24th May 2025';

  const sectionStyle = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <Box bg="white" minH="100vh">
      {/* Header Section */}
      <MotionBox
        bgGradient="linear(to-b, #E5F3FF, #E5F3FF00)"
        py={20}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Container
          maxW={{
            base: 'container.sm',
            md: 'container.md',
            lg: 'container.lg',
          }}
        >
          <MotionVStack
            spacing={6}
            textAlign="center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HStack
              bg="#FFFFFF66"
              rounded="full"
              px={6}
              py={3}
              alignItems="center"
              gap={3}
            >
              <Badge
                colorScheme="blue"
                variant="solid"
                rounded="full"
                px={3}
                py={1}
              >
                Legal
              </Badge>
              <Text fontSize="14px" fontWeight="500" color="#505050">
                Last Updated: {lastUpdated}
              </Text>
            </HStack>

            <Heading
              as="h1"
              fontSize={['3xl', '4xl', '5xl']}
              fontWeight="700"
              color="#000000"
              lineHeight="1.2"
              maxW="4xl"
            >
              Terms and Conditions & Terms of Use
            </Heading>

            <Text
              fontSize={['md', 'lg']}
              color="#374151"
              fontWeight="400"
              maxW="2xl"
              lineHeight="1.6"
            >
              Welcome to the RIGHTCRED DATA SOLUTIONS LIMITED App. Please read
              these terms carefully before using our services.
            </Text>
          </MotionVStack>
        </Container>
      </MotionBox>

      {/* Main Content */}
      <Container
        maxW={{
          base: 'container.sm',
          md: 'container.md',
          lg: 'container.lg',
        }}
        py={10}
      >
        <VStack spacing={12} align="stretch">
          {/* Introduction */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Text fontSize="lg" color="#374151" lineHeight="1.8">
                Welcome to the RIGHTCRED DATA SOLUTIONS LIMITED App (the "App"),
                a service provided by{' '}
                <Text as="span" fontWeight="600" color="brand.100">
                  RIGHTCRED DATA SOLUTIONS LIMITED
                </Text>
                , a company registered in Nigeria with RC 8233667, and having
                its registered address at 3A, CRESCENT B, OBA ADEYINKA OYEKAN
                ESTATE, LEKKI PHASE 1, LAGOS STATE, NIGERIA ("we," "our," or
                "us"). These Terms and Conditions and Terms of Use ("Terms")
                govern your access to and use of the App, including any content,
                functionality, and services offered on or through the App.
              </Text>

              <Box
                bg="#F7FAFF"
                p={6}
                rounded="xl"
                border="1px"
                borderColor="#E3E5EB"
              >
                <Text fontSize="md" color="#374151" lineHeight="1.7">
                  <Text as="span" fontWeight="600">
                    Please read these Terms carefully before you start to use
                    the App.
                  </Text>{' '}
                  By clicking "I agree" or "accept" (or other similar buttons),
                  or by otherwise accessing and/or using any part of the
                  Service, you acknowledge that you have read, understood, and
                  agreed to be bound by all the terms and conditions of this
                  Terms. This Agreement constitutes a binding agreement between
                  you and RIGHTCRED DATA SOLUTIONS LIMITED. If you do not agree
                  to these Terms or the Privacy Policy, you must not access or
                  use the App.
                </Text>
              </Box>
            </VStack>
          </MotionBox>

          {/* 1. Definitions */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                1. Definitions
              </Heading>
              <VStack spacing={4} align="stretch">
                {[
                  {
                    term: 'Account',
                    definition:
                      'Any accounts or instances created by, or on behalf of, a User within the Services.',
                  },
                  {
                    term: 'App',
                    definition:
                      'Refers to the RIGHTCRED DATA SOLUTIONS LIMITED risk profiling application.',
                  },
                  {
                    term: 'API',
                    definition:
                      'Application programming interfaces developed, made available, and enabled by us that permit Users to access certain functionality provided by the Services.',
                  },
                  {
                    term: 'Confidential Information',
                    definition:
                      'All nonpublic information, including, but not limited to, trade secrets, computer programs, technical drawings, algorithms, formulas, processes, ideas, inventions (patentable or not), other technical or business information, physical samples, financial, business, sales information, know-how, terms of agreements, negotiations or proposals, all data, and such other information disclosed by us in whatever form and which (i) is known by the receiving party (User, or any other User\'s authorised representative) to be confidential; (ii) under circumstances by which the receiving party should reasonably understand such information is to be treated as confidential, whether or not marked by the disclosing party as "Confidential" or otherwise is marked as or stated to be confidential. Confidential Information may not be used, published, or redistributed by the receiving party without our prior written consent.',
                  },
                  {
                    term: 'Data/User Data',
                    definition:
                      'Any information, including Personal Data, provided by you or uploaded to the App for the purpose of generating risk profiles.',
                  },
                  {
                    term: 'End-User',
                    definition:
                      'The individual or corporate entity who ultimately uses our Products or Services, where applicable.',
                  },
                  {
                    term: 'NDPR',
                    definition:
                      'Refers to the Nigeria Data Protection Regulation 2019.',
                  },
                  {
                    term: 'Partner APIs',
                    definition:
                      'Application programming interfaces provided by third-party partners that integrate with our App to enhance or provide specific functionalities.',
                  },
                  {
                    term: 'Personal Data',
                    definition:
                      "Any information relating to an identified or identifiable natural person under the User's Account, who can be identified, directly or indirectly.",
                  },
                  {
                    term: 'Platform',
                    definition:
                      'The Website, mobile application, or any other medium through which RIGHTCRED DATA SOLUTIONS LIMITED offers its Products and Services to its customers or users.',
                  },
                  {
                    term: 'Products',
                    definition:
                      'Any of or a combination of the risk profiling tools and features developed by RIGHTCRED DATA SOLUTIONS LIMITED.',
                  },
                  {
                    term: 'Service',
                    definition:
                      'Any services or applications provided by RIGHTCRED DATA SOLUTIONS LIMITED through the App, including risk profiling functionalities and related services.',
                  },
                  {
                    term: 'Software',
                    definition:
                      'Software provided by RIGHTCRED DATA SOLUTIONS LIMITED (either by download or access through the internet) that allows Users or End-Users to use any functionality in connection with the applicable Service.',
                  },
                  {
                    term: 'Subscription Charges',
                    definition:
                      "All charges associated with the User's access to and use of an Account, where applicable.",
                  },
                  {
                    term: 'Subscription Term',
                    definition:
                      'The period during which the User has agreed to subscribe to a Service.',
                  },
                  {
                    term: 'Sub-processor(s)',
                    definition:
                      "Any third-party data processor engaged by RIGHTCRED DATA SOLUTIONS LIMITED, including entities from RIGHTCRED DATA SOLUTIONS LIMITED, who receives Service Data from RIGHTCRED DATA SOLUTIONS LIMITED for processing on behalf of User and in accordance with User's instructions (as communicated by RIGHTCRED DATA SOLUTIONS LIMITED) and the terms of its written subcontract.",
                  },
                  {
                    term: 'User/You/Your',
                    definition:
                      'Refers to the individual or entity accessing or using the App.',
                  },
                  {
                    term: 'Website/Site',
                    definition:
                      'A website, domain, or application operated by RIGHTCRED DATA SOLUTIONS LIMITED, through which the Services are available to Customers.',
                  },
                ].map((item, index) => (
                  <Box
                    key={index}
                    bg="#F7FAFF"
                    p={5}
                    rounded="lg"
                    border="1px"
                    borderColor="#E3E5EB"
                  >
                    <VStack spacing={2} align="flex-start">
                      <Text fontWeight="600" color="brand.100" fontSize="md">
                        {item.term}:
                      </Text>
                      <Text color="#374151" fontSize="14px" lineHeight="1.6">
                        {item.definition}
                      </Text>
                    </VStack>
                  </Box>
                ))}
              </VStack>
            </VStack>
          </MotionBox>

          {/* 2. Acceptance of Terms */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                2. Acceptance of Terms
              </Heading>
              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                By accessing or using the App, you confirm that you are at least
                18 years of age and that you are legally able to enter into this
                agreement, and that you have read, understood, and agreed to be
                bound by these Terms. If you are using the App on behalf of an
                organisation, you represent and warrant that you have the right,
                authority, and capacity to bind such entity to these Terms, and
                in such a case, "you" and "your" will refer to that
                organisation.
              </Text>
            </VStack>
          </MotionBox>

          {/* 3. User Accounts */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                3. User Accounts
              </Heading>
              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                If the App requires account registration, the following terms
                apply:
              </Text>

              <VStack spacing={5} align="stretch">
                <Box
                  bg="#F7FAFF"
                  p={6}
                  rounded="lg"
                  border="1px"
                  borderColor="#E3E5EB"
                >
                  <VStack spacing={3} align="stretch">
                    <Text fontWeight="600" color="brand.100" fontSize="md">
                      3.1. Account Creation
                    </Text>
                    <Text color="#374151" fontSize="14px" lineHeight="1.7">
                      To access certain features of the App, you may be required
                      to register for an account. You agree to provide accurate,
                      current, and complete information during the registration
                      process and to update such information to keep it
                      accurate, current, and complete. We may seek to verify
                      your information (by ourselves or through third parties),
                      after which we will approve your account unless deemed
                      risky to our business. You permit us to do all these. Each
                      User (including natural person, business or legal entity)
                      shall maintain only one main account at any time.
                    </Text>
                  </VStack>
                </Box>

                <Box
                  bg="#F7FAFF"
                  p={6}
                  rounded="lg"
                  border="1px"
                  borderColor="#E3E5EB"
                >
                  <VStack spacing={3} align="stretch">
                    <Text fontWeight="600" color="brand.100" fontSize="md">
                      3.2. Account Security
                    </Text>
                    <Text color="#374151" fontSize="14px" lineHeight="1.7">
                      You are responsible for maintaining the confidentiality of
                      your account login credentials (username and password) and
                      for all activities that occur under your account. You
                      agree not to allow anyone else to access or use your
                      password details and comply with all reasonable
                      instructions we may issue regarding account access and
                      security. In the event you share your password details,
                      RIGHTCRED DATA SOLUTIONS LIMITED will not be liable to you
                      for losses or damages. You will also take all reasonable
                      steps to protect the security of the personal electronic
                      device through which you access the App (including,
                      without limitation, using a PIN and/or password-protected
                      personally configured device functionality to access the
                      App and not sharing your device with other people). You
                      are responsible for securely managing your password(s) for
                      the Services and to contact RIGHTCRED DATA SOLUTIONS
                      LIMITED if you become aware of any unauthorised access to
                      your Account.
                    </Text>
                  </VStack>
                </Box>

                <Box
                  bg="#F7FAFF"
                  p={6}
                  rounded="lg"
                  border="1px"
                  borderColor="#E3E5EB"
                >
                  <VStack spacing={3} align="stretch">
                    <Text fontWeight="600" color="brand.100" fontSize="md">
                      3.3. Account Suspension and Termination
                    </Text>
                    <Text color="#374151" fontSize="14px" lineHeight="1.7">
                      We reserve the right to suspend or terminate your account
                      at our sole discretion, without notice or liability, for
                      any reason, including if you violate these Terms. You may
                      also terminate your account at any time by contacting us.
                    </Text>
                  </VStack>
                </Box>
              </VStack>
            </VStack>
          </MotionBox>

          {/* 4. User Responsibilities and Data Consent (NDPR Compliance) */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                4. User Responsibilities and Data Consent (NDPR Compliance)
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                Your use of the App is contingent upon your strict adherence to
                the following data consent and responsibility clauses, in
                compliance with the NDPR:
              </Text>

              <VStack spacing={4} align="stretch">
                <Box
                  bg="#F7FAFF"
                  p={6}
                  rounded="lg"
                  border="1px"
                  borderColor="#E3E5EB"
                >
                  <VStack spacing={3} align="stretch">
                    <Text fontWeight="600" color="brand.100" fontSize="md">
                      4.1. Consent for Data Submission
                    </Text>
                    <Text color="#374151" fontSize="14px" lineHeight="1.7">
                      You confirm and warrant that you have obtained all
                      necessary and legally valid consent from the owner(s) of
                      any data you submit, upload, or otherwise provide to our
                      system through the App. This includes, but is not limited
                      to, explicit, informed, and unambiguous consent, freely
                      given, for the collection, processing, and storage of
                      their data by us, as required by the NDPR. You acknowledge
                      that we rely on this confirmation and that any failure to
                      obtain such consent is solely your responsibility.
                    </Text>
                  </VStack>
                </Box>

                <Box
                  bg="#F7FAFF"
                  p={6}
                  rounded="lg"
                  border="1px"
                  borderColor="#E3E5EB"
                >
                  <VStack spacing={3} align="stretch">
                    <Text fontWeight="600" color="brand.100" fontSize="md">
                      4.2. Consent for Data Analysis
                    </Text>
                    <Text color="#374151" fontSize="14px" lineHeight="1.7">
                      You confirm and warrant that you have obtained explicit
                      consent from the data owner(s) allowing us to use the
                      submitted data for analysis. This analysis may include,
                      but is not limited to, the generation of risk profiles,
                      statistical evaluation, and the development of insights
                      related to the data.
                    </Text>
                  </VStack>
                </Box>

                <Box
                  bg="#F7FAFF"
                  p={6}
                  rounded="lg"
                  border="1px"
                  borderColor="#E3E5EB"
                >
                  <VStack spacing={3} align="stretch">
                    <Text fontWeight="600" color="brand.100" fontSize="md">
                      4.3. Consent for Partner API Usage
                    </Text>
                    <Text color="#374151" fontSize="14px" lineHeight="1.7">
                      You confirm and warrant that you have obtained explicit
                      consent from the data owner(s) allowing us to share and
                      use their data with our Partner APIs. These Partner APIs
                      may process the data to provide enhanced analytical
                      capabilities, perform specific risk assessments, or
                      integrate with other relevant services. We will ensure
                      that any such partners adhere to appropriate data
                      protection standards in line with NDPR requirements.
                    </Text>
                  </VStack>
                </Box>

                <Box
                  bg="#F7FAFF"
                  p={6}
                  rounded="lg"
                  border="1px"
                  borderColor="#E3E5EB"
                >
                  <VStack spacing={3} align="stretch">
                    <Text fontWeight="600" color="brand.100" fontSize="md">
                      4.4. Consent for Data Retention and Future Use
                    </Text>
                    <Text color="#374151" fontSize="14px" lineHeight="1.7">
                      You confirm and warrant that you have obtained explicit
                      consent from the data owner(s) allowing us to retain the
                      submitted data and use it for our legitimate business
                      purposes. These purposes may include, but are not limited
                      to, improving the App's algorithms, developing new
                      features, conducting research, and ensuring the ongoing
                      accuracy and relevance of our risk profiling models. Where
                      possible and appropriate, data will be anonymised or
                      aggregated for such purposes in a manner compliant with
                      NDPR.
                    </Text>
                  </VStack>
                </Box>

                <Box
                  bg="#F7FAFF"
                  p={6}
                  rounded="lg"
                  border="1px"
                  borderColor="#E3E5EB"
                >
                  <VStack spacing={3} align="stretch">
                    <Text fontWeight="600" color="brand.100" fontSize="md">
                      4.5. Data Accuracy and Legality
                    </Text>
                    <Text color="#374151" fontSize="14px" lineHeight="1.7">
                      You are solely responsible for the accuracy, completeness,
                      and legality of all Data you provide to the App. You must
                      ensure that the Data does not violate any applicable
                      Nigerian laws or regulations, including the NDPR, or
                      infringe upon the rights of any third party.
                    </Text>
                  </VStack>
                </Box>
              </VStack>
            </VStack>
          </MotionBox>

          {/* 5. Prohibited Uses */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                5. Prohibited Uses
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                You may use the App only for lawful purposes and in accordance
                with these Terms. You agree not to use the App:
              </Text>

              <Box
                bg="#F7FAFF"
                p={6}
                rounded="lg"
                border="1px"
                borderColor="#E3E5EB"
              >
                <UnorderedList spacing={3} pl={5}>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    In any way that violates any applicable national, state, or
                    international law or regulation in Nigeria.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    For the purpose of exploiting, harming, or attempting to
                    exploit or harm minors in any way by exposing them to
                    inappropriate content or otherwise.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    To transmit, or procure the sending of, any advertising or
                    promotional material, including any "junk mail," "chain
                    letter," "spam," or any other similar solicitation.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    To impersonate or attempt to impersonate RIGHTCRED DATA
                    SOLUTIONS LIMITED, a Company employee, another user, or any
                    other person or entity.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    To engage in any other conduct that restricts or inhibits
                    anyone's use or enjoyment of the App, or which, as
                    determined by us, may harm RIGHTCRED DATA SOLUTIONS LIMITED
                    or users of the App, or expose them to liability.
                  </ListItem>
                </UnorderedList>
              </Box>

              <Text
                color="#374151"
                lineHeight="1.7"
                fontSize="16px"
                fontWeight="600"
              >
                Additionally, you agree not to:
              </Text>

              <Box
                bg="#F7FAFF"
                p={6}
                rounded="lg"
                border="1px"
                borderColor="#E3E5EB"
              >
                <UnorderedList spacing={3} pl={5}>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Systematically retrieve data or other content from the Site
                    to create or compile, directly or indirectly, a collection,
                    compilation, database, or directory without written
                    permission from us.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Make any unauthorised use of the Site, including collecting
                    usernames and/or email addresses of users by electronic or
                    other means for the purpose of sending unsolicited email, or
                    creating user accounts by automated means or under false
                    pretences.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Circumvent, disable, or otherwise interfere with
                    security-related features of the Site, including features
                    that prevent or restrict the use or copying of any Content
                    or enforce limitations on the use of the Site and/or the
                    Content contained therein.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Engage in unauthorised framing of or linking to the Site.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Trick, defraud, or mislead us and other users, especially in
                    any attempt to learn sensitive account information such as
                    user passwords.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Make improper use of our support services or submit false
                    reports of abuse or misconduct.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Engage in any automated use of the system, such as using
                    scripts to send comments or messages, or using any data
                    mining, robots, or similar data gathering and extraction
                    tools.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Interfere with, disrupt, or create an undue burden on the
                    Site or the networks or services connected to the Site.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Use any information obtained from the Site in order to
                    harass, abuse, or harm another person.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Use the Site as part of any effort to compete with us or
                    otherwise use the Site and/or the Content for any
                    revenue-generating endeavour or commercial enterprise.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Decipher, decompile, disassemble, or reverse engineer any of
                    the software comprising or in any way making up a part of
                    the Site.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Attempt to bypass any measures of the Site designed to
                    prevent or restrict access to the Site, or any portion of
                    the Site.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Harass, annoy, intimidate, or threaten any of our employees
                    or agents engaged in providing any portion of the Site to
                    you.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Delete the copyright or other proprietary rights notice from
                    any Content.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Copy or adapt the Site's software, including but not limited
                    to Flash, PHP, HTML, JavaScript, or other code.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Disparage, tarnish, or otherwise harm, in our opinion, us
                    and/or the Site.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Reproduce, sell, or exploit any part of the Platform.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Share material containing software viruses or code designed
                    to disrupt or damage computer systems.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Disrupt the normal flow or negatively affect other users'
                    real-time exchanges.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Interfere with the Platform or connected networks or disobey
                    network regulations.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    Violate any applicable local, state, national, or
                    international laws and regulations.
                  </ListItem>
                </UnorderedList>
              </Box>
            </VStack>
          </MotionBox>

          {/* 6. Our Rights and Data Usage */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                6. Our Rights and Data Usage
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                Subject to your consents outlined in Section 4, and in
                compliance with the NDPR, we reserve the right to:
              </Text>

              <Box
                bg="#F7FAFF"
                p={6}
                rounded="lg"
                border="1px"
                borderColor="#E3E5EB"
              >
                <UnorderedList spacing={3} pl={5}>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    <Text as="span" fontWeight="600">
                      Process and Analyse Data:
                    </Text>{' '}
                    Use the Data to perform the requested risk profiling,
                    conduct statistical analysis, and generate insights.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    <Text as="span" fontWeight="600">
                      Improve Services:
                    </Text>{' '}
                    Utilise aggregated and anonymised Data to improve the
                    functionality, accuracy, and performance of the App and its
                    underlying algorithms. This includes research and
                    development of new features.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    <Text as="span" fontWeight="600">
                      Partner Integration:
                    </Text>{' '}
                    Share Data with trusted Partner APIs as necessary to deliver
                    the Service, provided that such sharing is covered by the
                    consents you have obtained and is in compliance with our
                    [Privacy Policy]([Link to your Privacy Policy]) and
                    applicable Nigerian data protection laws.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    <Text as="span" fontWeight="600">
                      Data Retention:
                    </Text>{' '}
                    Retain Data for as long as necessary to fulfil the purposes
                    for which it was collected, including for ongoing service
                    improvement, research, and compliance with legal obligations
                    under Nigerian law. We implement robust security measures to
                    protect retained Data.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    <Text as="span" fontWeight="600">
                      Licence to Use Data:
                    </Text>{' '}
                    You retain all rights to the data you input into any of the
                    platforms. We do not claim ownership of any data you submit.
                    By using the platform, you grant us a non-exclusive,
                    worldwide, royalty-free licence to use, host, store, and
                    process the data solely for the purpose of providing the
                    services and as described in the Privacy Notice.
                  </ListItem>
                </UnorderedList>
              </Box>
            </VStack>
          </MotionBox>

          {/* 7. Data Subject Rights (NDPR) */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                7. Data Subject Rights (NDPR)
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                In accordance with the NDPR, data subjects whose personal data
                you submit through the App have the following rights, which
                RIGHTCRED DATA SOLUTIONS LIMITED commits to facilitating:
              </Text>

              <Box
                bg="#F7FAFF"
                p={6}
                rounded="lg"
                border="1px"
                borderColor="#E3E5EB"
              >
                <UnorderedList spacing={3} pl={5}>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    <Text as="span" fontWeight="600">
                      Right to Information/Access:
                    </Text>{' '}
                    The right to obtain confirmation as to whether or not
                    personal data concerning them is being processed, and where
                    that is the case, access to the personal data and specific
                    information regarding the processing.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    <Text as="span" fontWeight="600">
                      Right to Rectification:
                    </Text>{' '}
                    The right to obtain from us the rectification of inaccurate
                    personal data concerning them.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    <Text as="span" fontWeight="600">
                      Right to Erasure ("Right to be Forgotten"):
                    </Text>{' '}
                    The right to obtain the erasure of personal data concerning
                    them without undue delay in certain circumstances.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    <Text as="span" fontWeight="600">
                      Right to Restrict Processing:
                    </Text>{' '}
                    The right to obtain from us restriction of processing in
                    certain circumstances.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    <Text as="span" fontWeight="600">
                      Right to Data Portability:
                    </Text>{' '}
                    The right to receive the personal data concerning them,
                    which they have provided to us, in a structured, commonly
                    used and machine-readable format and have the right to
                    transmit those data to another controller without hindrance.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    <Text as="span" fontWeight="600">
                      Right to Object:
                    </Text>{' '}
                    The right to object, on grounds relating to their particular
                    situation, at any time to processing of personal data
                    concerning them.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    <Text as="span" fontWeight="600">
                      Rights in relation to Automated Decision Making and
                      Profiling:
                    </Text>{' '}
                    The right not to be subject to a decision based solely on
                    automated processing, including profiling, which produces
                    legal effects concerning them or similarly significantly
                    affects them.
                  </ListItem>
                </UnorderedList>
              </Box>

              <Text
                color="#374151"
                fontSize="14px"
                lineHeight="1.6"
                fontStyle="italic"
              >
                To exercise any of these rights, please contact our Data
                Protection Officer or Data Protection Lead as specified in
                Section 29.
              </Text>
            </VStack>
          </MotionBox>

          {/* 8. International Data Transfers */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                8. International Data Transfers
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                If the processing of personal data involves transferring data
                outside of Nigeria, RIGHTCRED DATA SOLUTIONS LIMITED shall
                ensure that such transfers comply with the provisions of the
                NDPR. This may involve ensuring that the recipient country has
                an adequate level of data protection, or implementing
                appropriate safeguards such as standard contractual clauses, or
                relying on explicit consent of the data subject where
                applicable.
              </Text>
            </VStack>
          </MotionBox>

          {/* 9. Intellectual Property Rights */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                9. Intellectual Property Rights
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                The App and its entire contents, features, and functionality
                (including but not limited to all information, software, text,
                displays, images, video, and audio, and the design, selection,
                and arrangement thereof) are owned by RIGHTCRED DATA SOLUTIONS
                LIMITED, its licensors, or other providers of such material and
                are protected by Nigerian and international copyright,
                trademark, patent, trade secret, and other intellectual property
                or proprietary rights laws.
              </Text>

              <Box
                bg="#F7FAFF"
                p={6}
                rounded="lg"
                border="1px"
                borderColor="#E3E5EB"
              >
                <Text color="#374151" fontSize="14px" lineHeight="1.7">
                  RIGHTCRED DATA SOLUTIONS LIMITED exclusively owns all rights,
                  including intellectual property, in the Platform, Services,
                  Products, logos, and Software, except for Third-Party
                  Properties. The Platform may display the logos, trademarks,
                  and service marks owned by us or others. This does not grant
                  you a licence, and unauthorised use may breach intellectual
                  property laws. The Platform belongs to us; these Terms do not
                  transfer ownership.
                </Text>
              </Box>
            </VStack>
          </MotionBox>

          {/* 10. Disclaimer of Warranties */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                10. Disclaimer of Warranties
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                You understand that we cannot and do not guarantee or warrant
                that files available for downloading from the internet or the
                App will be free of viruses or other destructive code. You are
                responsible for implementing sufficient procedures and
                checkpoints to satisfy your particular requirements for
                anti-virus protection and accuracy of data input and output, and
                for maintaining a means external to our site for any
                reconstruction of any lost data.
              </Text>

              <Box
                bg="#FFF8E1"
                border="1px"
                borderColor="#FFB74D"
                rounded="xl"
                p={6}
              >
                <VStack spacing={4} align="stretch">
                  <HStack>
                    <Badge colorScheme="orange" variant="solid" rounded="full">
                      IMPORTANT
                    </Badge>
                    <Text fontWeight="600" color="#F57C00">
                      Warranty Disclaimer
                    </Text>
                  </HStack>
                  <Text
                    color="#374151"
                    lineHeight="1.7"
                    fontSize="14px"
                    textTransform="uppercase"
                    fontWeight="600"
                  >
                    TO THE FULLEST EXTENT PROVIDED BY LAW, WE WILL NOT BE LIABLE
                    FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED
                    DENIAL-OF-SERVICE ATTACK, VIRUSES, OR OTHER TECHNOLOGICALLY
                    HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT,
                    COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL DUE
                    TO YOUR USE OF THE APP OR ANY SERVICES OR ITEMS OBTAINED
                    THROUGH THE APP OR TO YOUR DOWNLOADING OF ANY MATERIAL
                    POSTED ON IT, OR ON ANY WEBSITE LINKED TO IT.
                  </Text>
                  <Text
                    color="#374151"
                    lineHeight="1.7"
                    fontSize="14px"
                    textTransform="uppercase"
                    fontWeight="600"
                  >
                    YOUR USE OF THE APP, ITS CONTENT, AND ANY SERVICES OR ITEMS
                    OBTAINED THROUGH THE APP IS AT YOUR OWN RISK. THE APP, ITS
                    CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE APP
                    ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT
                    ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                  </Text>
                  <Text
                    color="#374151"
                    lineHeight="1.7"
                    fontSize="14px"
                    textTransform="uppercase"
                    fontWeight="600"
                  >
                    TO THE FULLEST EXTENT PROVIDED BY LAW, RIGHTCRED DATA
                    SOLUTIONS LIMITED HEREBY DISCLAIMS ALL WARRANTIES OF ANY
                    KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE,
                    INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
                    MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR
                    PARTICULAR PURPOSE.
                  </Text>
                </VStack>
              </Box>

              <Text color="#374151" lineHeight="1.7" fontSize="14px">
                Due to the complexity of long-distance data transmission, there
                is no possibility of ensuring absolute accuracy, security,
                accessibility, integrity and continuity of the provided
                Services. You understand that use of the Services necessarily
                involves the transmission of your data over networks that we do
                not own, operate or control, and we are not responsible for any
                of your data lost, altered, intercepted or stored across such
                networks. We do not guarantee any minimum response times or
                delivery times in connection with the performance of the
                Services. We may perform scheduled or emergency maintenance
                (including temporary suspension of any Services if necessary) to
                maintain or modify any Services without previous notice given to
                you and without any liability on our side.
              </Text>
            </VStack>
          </MotionBox>

          {/* 11. Informational Purposes Only and Limitation of Liability for Decisions */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                11. Informational Purposes Only and Limitation of Liability for
                Decisions
              </Heading>

              <Box
                bg="#FFF8E1"
                border="1px"
                borderColor="#FFB74D"
                rounded="xl"
                p={6}
              >
                <VStack spacing={4} align="stretch">
                  <HStack>
                    <Badge colorScheme="orange" variant="solid" rounded="full">
                      IMPORTANT
                    </Badge>
                    <Text fontWeight="600" color="#F57C00">
                      Risk Assessment Disclaimer
                    </Text>
                  </HStack>
                  <Text color="#374151" lineHeight="1.7" fontSize="16px">
                    The risk profiles and any other outputs generated by the App
                    are for{' '}
                    <Text as="span" fontWeight="600">
                      informational purposes only
                    </Text>
                    . They are not intended to constitute financial, legal,
                    investment, or any other form of professional advice. You
                    should not rely on the information provided by the App as a
                    substitute for professional advice tailored to your specific
                    circumstances. We do not guarantee the accuracy,
                    completeness, or usefulness of any information generated by
                    the App.
                  </Text>
                  <Text color="#374151" lineHeight="1.7" fontSize="16px">
                    RIGHTCRED DATA SOLUTIONS LIMITED explicitly disclaims any
                    and all liability for any decisions made by you, as a credit
                    underwriter or business owner, or any third party, based on
                    the risk reports or any other information provided by the
                    App. You acknowledge and agree that you are solely
                    responsible for all decisions and actions taken based on
                    your interpretation and use of the information generated by
                    the App, and you use such information at your own risk.
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </MotionBox>

          {/* 12. Limitation of Liability */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                12. Limitation of Liability
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                In no event will RIGHTCRED DATA SOLUTIONS LIMITED, its
                affiliates, or their licensors, service providers, employees,
                agents, officers, or directors be liable for any direct,
                indirect, incidental, special, consequential or exemplary
                damages, including but not limited to, damages for loss of
                profits, revenues, business opportunities, goodwill or
                anticipated savings, indirect or consequential loss, punitive
                damages, personal injury, pain and suffering, emotional
                distress, loss of use, loss of data, and whether caused by tort
                (including negligence), breach of contract, or otherwise, even
                if foreseeable.
              </Text>

              <Box
                bg="#F7FAFF"
                p={5}
                rounded="lg"
                border="1px"
                borderColor="#E3E5EB"
              >
                <Text color="#374151" fontSize="14px" lineHeight="1.6">
                  <Text as="span" fontWeight="600">
                    Liability Cap:
                  </Text>{' '}
                  RIGHTCRED DATA SOLUTIONS LIMITED's total liability arising out
                  of or relating to these Terms is limited to the greater of (i)
                  NGN 50,000 Naira or (ii) the fees that you paid to use the
                  relevant services in the twelve (12) months before the breach
                  giving rise to the liability.
                </Text>
              </Box>
            </VStack>
          </MotionBox>

          {/* 13. Indemnification */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                13. Indemnification
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                You agree to defend, indemnify, and hold harmless RIGHTCRED DATA
                SOLUTIONS LIMITED, its affiliates, licensors, and service
                providers, and its and their respective officers, directors,
                employees, contractors, agents, licensors, suppliers,
                successors, and assigns from and against any claims,
                liabilities, damages, judgments, awards, losses, costs,
                expenses, or fees (including reasonable legal fees) arising out
                of or relating to your violation of these Terms or your use of
                the App, including, but not limited to, your submission of Data
                without proper consent, any use of the App's content, services,
                and products other than as expressly authorised in these Terms,
                or your use of any information obtained from the App.
              </Text>

              <Box
                bg="#F7FAFF"
                p={5}
                rounded="lg"
                border="1px"
                borderColor="#E3E5EB"
              >
                <Text color="#374151" fontSize="14px" lineHeight="1.6">
                  <Text as="span" fontWeight="600">
                    Indemnification Process:
                  </Text>{' '}
                  If an indemnity obligation arises, you shall: (a) promptly
                  notify us of the claim, (b) provide reasonable assistance in
                  defence and settlement at our expense, (c) we will control the
                  defence and settlement. You cannot settle without our written
                  consent if it adversely affects our rights or interests or
                  adds obligations.
                </Text>
              </Box>
            </VStack>
          </MotionBox>

          {/* 14. Termination */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                14. Termination
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                We may terminate or suspend your access to all or part of the
                App immediately, without prior notice or liability, for any
                reason whatsoever, including without limitation if you breach
                these Terms, if we are required to do so under law, in case of
                liquidation, if we choose to discontinue the Service being
                offered or discontinue operating the Platform, if the licence
                granted to use the Platform expires, or in the event of
                non-payment of outstanding sum. Upon termination, your right to
                use the App will immediately cease. Termination of these Terms,
                for any reason, does not relieve you of your obligations,
                including but not limited to repaying any outstanding sum.
              </Text>
            </VStack>
          </MotionBox>

          {/* 15. Governing Law and Jurisdiction */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                15. Governing Law and Jurisdiction
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                All matters relating to the App and these Terms, and any dispute
                or claim arising therefrom or related thereto (in each case,
                including non-contractual disputes or claims), shall be governed
                by and construed in accordance with the internal laws of the
                Federal Republic of Nigeria without giving effect to any choice
                or conflict of law provision or rule. Any legal suit, action, or
                proceeding arising out of, or related to, these Terms or the App
                shall be instituted exclusively in the courts of Lagos State,
                Nigeria.
              </Text>
            </VStack>
          </MotionBox>

          {/* 16. Beta Services and Trial Period */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                16. Beta Services and Trial Period
              </Heading>

              <VStack spacing={5} align="stretch">
                <Box
                  bg="#F7FAFF"
                  p={6}
                  rounded="lg"
                  border="1px"
                  borderColor="#E3E5EB"
                >
                  <VStack spacing={3} align="stretch">
                    <Text fontWeight="600" color="brand.100" fontSize="md">
                      16.1. Classification
                    </Text>
                    <Text color="#374151" fontSize="14px" lineHeight="1.7">
                      RIGHTCRED DATA SOLUTIONS LIMITED may classify certain
                      services or technology, including a particular release or
                      feature, as Beta. Services or Technology may be generally
                      available in some circumstances (e.g., in some countries
                      or regions) while still classified as Beta in other
                      circumstances.
                    </Text>
                  </VStack>
                </Box>

                <Box
                  bg="#F7FAFF"
                  p={6}
                  rounded="lg"
                  border="1px"
                  borderColor="#E3E5EB"
                >
                  <VStack spacing={3} align="stretch">
                    <Text fontWeight="600" color="brand.100" fontSize="md">
                      16.2. Nature of Beta Services
                    </Text>
                    <Text color="#374151" fontSize="14px" lineHeight="1.7">
                      By their nature, Beta Services may be feature-incomplete
                      or contain bugs. RIGHTCRED DATA SOLUTIONS LIMITED may
                      describe limitations that exist within a Beta Service;
                      however, your reliance on the accuracy or completeness of
                      these descriptions is at your own risk. You should only
                      use Beta Services in a production environment until and if
                      you understand and accept the limitations and flaws that
                      may be present in Beta Services.
                    </Text>
                  </VStack>
                </Box>

                <Box
                  bg="#F7FAFF"
                  p={6}
                  rounded="lg"
                  border="1px"
                  borderColor="#E3E5EB"
                >
                  <VStack spacing={3} align="stretch">
                    <Text fontWeight="600" color="brand.100" fontSize="md">
                      16.3. Feedback
                    </Text>
                    <Text color="#374151" fontSize="14px" lineHeight="1.7">
                      Unless RIGHTCRED DATA SOLUTIONS LIMITED otherwise agrees
                      in writing, your use of Beta Services is confidential, and
                      you must provide timely Feedback on the Beta Services in
                      response to RIGHTCRED DATA SOLUTIONS LIMITED's requests.
                    </Text>
                  </VStack>
                </Box>

                <Box
                  bg="#F7FAFF"
                  p={6}
                  rounded="lg"
                  border="1px"
                  borderColor="#E3E5EB"
                >
                  <VStack spacing={3} align="stretch">
                    <Text fontWeight="600" color="brand.100" fontSize="md">
                      16.4. Availability During Beta Period
                    </Text>
                    <Text color="#374151" fontSize="14px" lineHeight="1.7">
                      RIGHTCRED DATA SOLUTIONS LIMITED may suspend or terminate
                      your access to any Beta services at any time. We're
                      constantly developing new technologies and features to
                      improve our Services and Products. As part of this
                      continual improvement, we sometimes add or remove features
                      and functionalities, increase or decrease limits on our
                      Services and start offering new services or stop offering
                      old ones. When a Product requires or includes downloadable
                      software, that software sometimes updates automatically on
                      your device once a new version or feature is available.
                      Some Products let you adjust your automatic update
                      settings. If we make material changes that negatively
                      impact your use of our Products or if we stop offering a
                      service, we'll provide you with reasonable advance notice,
                      except in urgent situations such as preventing abuse,
                      responding to legal requirements, or addressing security
                      and operability issues.
                    </Text>
                  </VStack>
                </Box>
              </VStack>
            </VStack>
          </MotionBox>

          {/* 17. System Requirements */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                17. System Requirements
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                A high-speed Internet connection is required for proper
                transmission of the Services. You are responsible for procuring
                and maintaining the network connections that connect your
                network to the Services, including, but not limited to, browser
                software that supports protocols used by the Product(s) or other
                protocols accepted by RIGHTCRED DATA SOLUTIONS LIMITED, and for
                following procedures for accessing services that support such
                protocols.
              </Text>

              <Box
                bg="#F7FAFF"
                p={5}
                rounded="lg"
                border="1px"
                borderColor="#E3E5EB"
              >
                <Text color="#374151" fontSize="14px" lineHeight="1.6">
                  <Text as="span" fontWeight="600">
                    Important:
                  </Text>{' '}
                  RIGHTCRED DATA SOLUTIONS LIMITED is not responsible for
                  notifying you, your agents, or End-Users of any upgrades,
                  fixes or enhancements to any such software or for any
                  compromise of data, including Service Data, transmitted across
                  computer networks or telecommunications facilities (including
                  but not limited to the Internet) which are not owned, operated
                  or controlled by RIGHTCRED DATA SOLUTIONS LIMITED. RIGHTCRED
                  DATA SOLUTIONS LIMITED assumes no responsibility for the
                  reliability or performance of any connections as described in
                  this Section.
                </Text>
              </Box>
            </VStack>
          </MotionBox>

          {/* 18. Internal Business Purposes Only */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                18. Internal Business Purposes Only
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                Unless otherwise authorised by RIGHTCRED DATA SOLUTIONS LIMITED
                in this Agreement or expressly agreed to otherwise in writing by
                RIGHTCRED DATA SOLUTIONS LIMITED, you may not use the Services
                in any manner where you act as a service bureau or provide any
                outsourced business process services on behalf of more than one
                (1) third party (other than Affiliates) through a single
                Account.
              </Text>

              <Box
                bg="#F7FAFF"
                p={5}
                rounded="lg"
                border="1px"
                borderColor="#E3E5EB"
              >
                <Text color="#374151" fontSize="14px" lineHeight="1.6">
                  <Text as="span" fontWeight="600">
                    Commercial Restrictions:
                  </Text>{' '}
                  This provision is not intended to prevent or inhibit the use
                  of the Services to provide business support to multiple
                  End-Users; however, you agree not to licence, sublicense,
                  sell, outsource, rent, lease, transfer, assign, distribute,
                  time-share or otherwise commercially exploit or resell the
                  Services to any third party, other than authorised users and
                  End-Users in furtherance of your internal business purposes as
                  expressly permitted by this Agreement, unless expressly agreed
                  to otherwise in writing by RIGHTCRED DATA SOLUTIONS LIMITED.
                  Without limiting the foregoing, your right to access and use
                  the services is also subject to the restrictions and policies
                  implemented by RIGHTCRED DATA SOLUTIONS LIMITED from time to
                  time with respect to the service as set forth in the
                  Documentation or otherwise communicated to you in accordance
                  with this Agreement.
                </Text>
              </Box>
            </VStack>
          </MotionBox>

          {/* 19. Fees and Billing */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                19. Fees and Billing
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                You may be required to purchase or pay a fee to access some of
                our services. You agree to provide current, complete, and
                accurate purchase and account information for all purchases made
                via the App. You further agree to promptly update account and
                payment information, including email address, payment method,
                and payment card expiration date, so that we can complete your
                transactions and contact you as needed. We bill you through an
                online billing account for purchases made via the App.
              </Text>

              <Text
                color="#374151"
                lineHeight="1.7"
                fontSize="16px"
                fontWeight="600"
              >
                Our pricing for data analysis reports is as follows:
              </Text>

              <TableContainer>
                <Table
                  variant="simple"
                  bg="white"
                  rounded="xl"
                  overflow="hidden"
                  boxShadow="sm"
                >
                  <Thead bg="#F7FAFF">
                    <Tr>
                      <Th color="brand.100" fontWeight="600" py={4}>
                        Service
                      </Th>
                      <Th color="brand.100" fontWeight="600" py={4}>
                        Price
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td py={4} fontWeight="500">
                        Personal Data Analysis Report
                      </Td>
                      <Td py={4} fontWeight="600" color="brand.100">
                        NGN 2,000
                      </Td>
                    </Tr>
                    <Tr>
                      <Td py={4} fontWeight="500">
                        Business Data Analysis Report
                      </Td>
                      <Td py={4} fontWeight="600" color="brand.100">
                        NGN 2,500
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                We may add VAT or other applicable taxes to the price of
                purchases as necessary. We reserve the right to change prices at
                any time. All payments shall be in Nigerian Naira. You agree to
                pay all charges or fees at the prices in effect for the selected
                service and authorise us to charge your chosen payment provider
                accordingly.
              </Text>

              <Box
                bg="#FFF5F5"
                border="1px"
                borderColor="#FEB2B2"
                rounded="xl"
                p={6}
              >
                <VStack spacing={4} align="stretch">
                  <HStack>
                    <Badge colorScheme="red" variant="solid" rounded="full">
                      PAYMENT TERMS
                    </Badge>
                    <Text fontWeight="600" color="#C53030">
                      Delinquency Consequences
                    </Text>
                  </HStack>
                  <Text color="#374151" lineHeight="1.7" fontSize="16px">
                    If you fail to make payments within 5 (five) days of notice
                    of delinquency, RIGHTCRED DATA SOLUTIONS LIMITED reserves
                    the right to:
                  </Text>
                  <UnorderedList spacing={2} pl={5}>
                    <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                      Suspend access to the services.
                    </ListItem>
                    <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                      Apply late payment penalties or interest charges as
                      permitted by applicable law.
                    </ListItem>
                  </UnorderedList>
                </VStack>
              </Box>

              <Box
                bg="#F7FAFF"
                p={5}
                rounded="lg"
                border="1px"
                borderColor="#E3E5EB"
              >
                <Text color="#374151" fontSize="14px" lineHeight="1.6">
                  <Text as="span" fontWeight="600">
                    Billing Corrections:
                  </Text>{' '}
                  RIGHTCRED DATA SOLUTIONS LIMITED reserves the right to correct
                  any errors or mistakes in billing and pricing, even after
                  payment has been received, and to refuse any order or purchase
                  that does not comply with these terms.
                </Text>
              </Box>
            </VStack>
          </MotionBox>

          {/* 20. Data Security */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                20. Data Security
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                You own all your User Information entered and stored via the
                Platform. You are responsible for the information's reliability
                and accuracy. We store your User Information for your
                convenience. By accepting these Terms, you authorise us to use
                your User Information, including personal information, for
                authentication and updates to your credentials.
              </Text>

              <Box
                bg="#F7FAFF"
                p={5}
                rounded="lg"
                border="1px"
                borderColor="#E3E5EB"
              >
                <Text color="#374151" fontSize="14px" lineHeight="1.6">
                  <Text as="span" fontWeight="600">
                    Usage Limitation:
                  </Text>{' '}
                  RIGHTCRED DATA SOLUTIONS LIMITED will not use the information
                  you provide for any other reason not explicitly stated in
                  these Terms or our Privacy Policy.
                </Text>
              </Box>
            </VStack>
          </MotionBox>

          {/* 21. Data Backup */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                21. Data Backup
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                To avoid data loss, we back up your data every day for 7 days.
                We guarantee that data processing regulations are met. You
                guarantee compliance with data processing requirements by
                ensuring that User Information provided by you does not violate
                third-party rights. You undertake to hold us harmless from any
                third-party claims relating to this data or the agreement.
              </Text>
            </VStack>
          </MotionBox>

          {/* 22. Third-Party Service Providers */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                22. Third-Party Service Providers
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                RIGHTCRED DATA SOLUTIONS LIMITED may use third-party service
                providers that are utilised by RIGHTCRED DATA SOLUTIONS LIMITED
                to assist in providing the Services to you. Any third-party
                service providers utilised by RIGHTCRED DATA SOLUTIONS LIMITED
                will be subject to confidentiality obligations that are
                substantially similar to the confidentiality terms herein.
                RIGHTCRED DATA SOLUTIONS LIMITED shall be responsible for the
                acts and omissions of members of RIGHTCRED DATA SOLUTIONS
                LIMITED's third-party service providers to the same extent that
                RIGHTCRED DATA SOLUTIONS LIMITED would be responsible if
                RIGHTCRED DATA SOLUTIONS LIMITED were performing the services of
                each third-party service provider directly under the terms of
                this Agreement.
              </Text>

              <VStack spacing={4} align="stretch">
                <Box
                  bg="#F7FAFF"
                  p={6}
                  rounded="lg"
                  border="1px"
                  borderColor="#E3E5EB"
                >
                  <VStack spacing={3} align="stretch">
                    <Text fontWeight="600" color="brand.100" fontSize="md">
                      22.1. Safeguards
                    </Text>
                    <Text color="#374151" fontSize="14px" lineHeight="1.7">
                      RIGHTCRED DATA SOLUTIONS LIMITED will maintain appropriate
                      administrative, physical, and technical safeguards for
                      protection of the security, confidentiality and integrity
                      of Service Data in accordance with industry best practices
                      and applicable Nigerian data protection laws.
                    </Text>
                  </VStack>
                </Box>

                <Box
                  bg="#F7FAFF"
                  p={6}
                  rounded="lg"
                  border="1px"
                  borderColor="#E3E5EB"
                >
                  <VStack spacing={3} align="stretch">
                    <Text fontWeight="600" color="brand.100" fontSize="md">
                      22.2. Service Data
                    </Text>
                    <Text color="#374151" fontSize="14px" lineHeight="1.7">
                      RIGHTCRED DATA SOLUTIONS LIMITED will, and you hereby
                      instruct RIGHTCRED DATA SOLUTIONS LIMITED to, access
                      Service Data to provide, secure and improve the Services.
                      You are solely responsible for the accuracy, content, and
                      legality of all Service Data. To improve RIGHTCRED DATA
                      SOLUTIONS LIMITED machine learning functionality,
                      RIGHTCRED DATA SOLUTIONS LIMITED models will only be
                      trained on Service Data which has been subject to
                      de-identification processes where appropriate and
                      compliant with NDPR.
                    </Text>
                  </VStack>
                </Box>
              </VStack>
            </VStack>
          </MotionBox>

          {/* 23. Grant of Limited Licence */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                23. Grant of Limited Licence
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                In order to access and utilise the services and tools provided
                through our platform, you are required to either download and
                install our mobile application ("App") or use our services
                directly on our website. RIGHTCRED DATA SOLUTIONS LIMITED hereby
                grants you a limited, non-exclusive, non-transferable,
                non-sublicensable, and revocable right to use the Platform.
                Please note that the Platform is licensed to you and not sold,
                and its usage is subject to the terms and conditions outlined
                herein. You may also access and use the Platform on various
                electronic devices, including mobile phones, tablets, and other
                compatible devices.
              </Text>

              <Box
                bg="#F7FAFF"
                p={6}
                rounded="lg"
                border="1px"
                borderColor="#E3E5EB"
              >
                <UnorderedList spacing={3} pl={5}>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    <Text as="span" fontWeight="600">
                      Scope of Licence:
                    </Text>{' '}
                    You may use the Platform on/from mobile phones, tablets, or
                    any other electronic devices as intended.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    <Text as="span" fontWeight="600">
                      Maintenance & Support:
                    </Text>{' '}
                    You acknowledge that while RIGHTCRED DATA SOLUTIONS LIMITED
                    may, at its sole discretion, provide maintenance and support
                    for the Platform from time to time, RIGHTCRED DATA SOLUTIONS
                    LIMITED shall have no specific obligation whatsoever to
                    furnish such services to you.
                  </ListItem>
                  <ListItem color="#374151" fontSize="14px" lineHeight="1.6">
                    <Text as="span" fontWeight="600">
                      Updates/Upgrades:
                    </Text>{' '}
                    We may launch new updates/upgrades for the Platform; you may
                    subscribe to the same through the Online Stores or our
                    designated channels. In the event, you choose not to
                    update/upgrade the Platform, certain features or
                    functionality will not be accessible to you. All references
                    herein to the Software shall include Revisions. This
                    Agreement shall govern any Revisions that replace or
                    supplement the original Software unless the Revision is
                    accompanied by a separate licence agreement which will
                    govern the Revision.
                  </ListItem>
                </UnorderedList>
              </Box>

              <Text color="#374151" fontSize="14px" lineHeight="1.6">
                Your use of the Platform is contingent upon your compliance with
                these Terms and Conditions. Any violation of these terms may
                result in the revocation of your licence to use the Platform.
              </Text>
            </VStack>
          </MotionBox>

          {/* 24. Third-Party Components */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                24. Third-Party Components
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                The Software may use or include third-party open-source
                software, files, libraries or components that may be distributed
                to you and are subject to third-party open-source licence terms.
                If there is a conflict between any open-source licence and the
                terms of this Agreement, then the open source licence terms
                shall prevail, but solely in connection with the related
                third-party open-source software. In accordance with the law,
                RIGHTCRED DATA SOLUTIONS LIMITED disclaims all warranties and
                indemnities with regard to any third-party open-source software.
              </Text>
            </VStack>
          </MotionBox>

          {/* 25. Submissions */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                25. Submissions
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                You acknowledge and agree that any questions, comments,
                suggestions, ideas, feedback, or other information regarding the
                Site ("Submissions") provided by you to us are non-confidential
                and shall become our sole property. We shall own exclusive
                rights, including all intellectual property rights. We shall be
                entitled to the unrestricted use and dissemination of these
                Submissions for any lawful purpose, commercial or otherwise,
                without acknowledgement or compensation to you. You hereby waive
                all moral rights to any such Submissions, and you hereby warrant
                that any such Submissions are original with you or that you have
                the right to submit such Submissions. You agree there shall be
                no recourse against us for any alleged or actual infringement or
                misappropriation of any proprietary right in your Submissions.
              </Text>
            </VStack>
          </MotionBox>

          {/* 26. Geographic Restrictions */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                26. Geographic Restrictions
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                The owner of the App is based in Nigeria. We provide this App
                for use primarily by persons located in Nigeria. We make no
                claims that the App or any of its content is accessible or
                appropriate outside of Nigeria. Access to the App may not be
                legal by certain persons or in certain countries. If you access
                the App from outside Nigeria, you do so on your own initiative
                and are responsible for compliance with local laws.
              </Text>
            </VStack>
          </MotionBox>

          {/* 27. Changes to the Terms */}
          <MotionBox {...sectionStyle}>
            <VStack spacing={6} align="stretch">
              <Heading as="h2" fontSize="2xl" fontWeight="600" color="#0E1735">
                27. Changes to the Terms
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                We may revise and update these Terms from time to time in our
                sole discretion. All changes are effective immediately when we
                post them and apply to all access to and use of the App
                thereafter. Your continued use of the App following the posting
                of revised Terms means that you accept and agree to the changes.
              </Text>
            </VStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <VStack align="stretch" spacing={4}>
              <Heading
                as="h2"
                size="lg"
                color="#111827"
                fontWeight="700"
                fontSize="20px"
              >
                28. Miscellaneous Provisions
              </Heading>

              <VStack align="stretch" spacing={4}>
                <Box>
                  <Heading
                    as="h3"
                    size="md"
                    color="#111827"
                    fontWeight="600"
                    fontSize="18px"
                    mb={2}
                  >
                    28.1. Severability
                  </Heading>
                  <Text color="#374151" lineHeight="1.7" fontSize="16px">
                    If any provision of these Terms is held by a court or other
                    tribunal of competent jurisdiction to be invalid, illegal,
                    or unenforceable for any reason, such provision shall be
                    eliminated or limited to the minimum extent such that the
                    remaining provisions of the Terms will continue in full
                    force and effect.
                  </Text>
                </Box>

                <Box>
                  <Heading
                    as="h3"
                    size="md"
                    color="#111827"
                    fontWeight="600"
                    fontSize="18px"
                    mb={2}
                  >
                    28.2. Entire Agreement
                  </Heading>
                  <Text color="#374151" lineHeight="1.7" fontSize="16px">
                    These Terms and our Privacy Policy constitute the sole and
                    entire agreement between you and RIGHTCRED DATA SOLUTIONS
                    LIMITED regarding the App and supersede all prior and
                    contemporaneous understandings, agreements, representations,
                    and warranties, both written and oral, regarding the App.
                  </Text>
                </Box>

                <Box>
                  <Heading
                    as="h3"
                    size="md"
                    color="#111827"
                    fontWeight="600"
                    fontSize="18px"
                    mb={2}
                  >
                    28.3. Assignment
                  </Heading>
                  <Text color="#374151" lineHeight="1.7" fontSize="16px">
                    You may not assign any of your rights or obligations under
                    these Terms without our prior written consent. We may assign
                    our rights and obligations under these Terms at any time, in
                    our sole discretion, without notice to you.
                  </Text>
                </Box>

                <Box>
                  <Heading
                    as="h3"
                    size="md"
                    color="#111827"
                    fontWeight="600"
                    fontSize="18px"
                    mb={2}
                  >
                    28.4. Force Majeure
                  </Heading>
                  <Text color="#374151" lineHeight="1.7" fontSize="16px">
                    We will not be liable or responsible for any failure to
                    perform, or delay in performance of, any of our obligations
                    under these Terms that are caused by events outside of our
                    reasonable control ("Force Majeure Event"). A Force Majeure
                    Event includes in particular (but without limitation) the
                    following: strikes, lockouts or other industrial action;
                    civil commotion, riot, invasion, terrorist attack or threat
                    of terrorist attack, war (whether declared or not) or threat
                    or preparation for war; cyberattacks; fire, explosion,
                    storm, flood, earthquake, subsidence, epidemic, pandemic or
                    other natural disaster or Act of God; nuclear, chemical or
                    biological contamination or sonic boom; impossibility of the
                    use of public or private telecommunications networks; the
                    acts, decrees, legislation, regulations or restrictions of
                    any government; the non-delivery or late delivery of
                    products or Service to us by third parties; or any other
                    event beyond a Party's reasonable control. Our performance
                    under these Terms and Conditions is deemed to be suspended
                    for the period that the Force Majeure Event continues, and
                    we will have an extension of time for performance for the
                    duration of that period.
                  </Text>
                </Box>

                <Box>
                  <Heading
                    as="h3"
                    size="md"
                    color="#111827"
                    fontWeight="600"
                    fontSize="18px"
                    mb={2}
                  >
                    28.5. Third-Party Links
                  </Heading>
                  <Text color="#374151" lineHeight="1.7" fontSize="16px">
                    The App may contain links to other websites and resources
                    provided by third parties from time to time. These links are
                    provided for your convenience. We do not endorse or take
                    responsibility for the content of those websites, we are not
                    responsible for the availability of them and will not be
                    liable in any way for any loss or damage which you may
                    suffer by your use or inability to use those websites. If
                    you decide to access linked websites you do so at your own
                    risk. If you purchase any goods or services from a third
                    party or third party website to which we provide a link,
                    your contract for the supply of those goods and services
                    will be with that third party. Reference to any product or
                    service on the site does not constitute an offer to sell or
                    supply that product or service and does not mean that the
                    product or service is available in all countries or that the
                    name and description of any product in your country will be
                    the same as that included on the site.
                  </Text>
                </Box>

                <Box>
                  <Heading
                    as="h3"
                    size="md"
                    color="#111827"
                    fontWeight="600"
                    fontSize="18px"
                    mb={2}
                  >
                    28.6. Site Management
                  </Heading>
                  <Text color="#374151" lineHeight="1.7" fontSize="16px">
                    We reserve the right, but not the obligation, to: (a)
                    monitor the Site for violations of these Terms of Use; (b)
                    take appropriate legal action against anyone who, in our
                    sole discretion, violates the law or these Terms of Use,
                    including without limitation, reporting such user to law
                    enforcement authorities; (c) in our sole discretion and
                    without limitation, refuse, restrict access to, limit the
                    availability of, or disable (to the extent technologically
                    feasible) any content or any portion thereof; (c) in our
                    sole discretion and without limitation, notice, or
                    liability, to remove from the Site or otherwise disable all
                    files and content that are excessive in size or are in any
                    way burdensome to our systems; and (e) otherwise manage the
                    Site in a manner designed to protect our rights and property
                    and to facilitate the proper functioning of the Site.
                  </Text>
                </Box>

                <Box>
                  <Heading
                    as="h3"
                    size="md"
                    color="#111827"
                    fontWeight="600"
                    fontSize="18px"
                    mb={2}
                  >
                    28.7. Waiver
                  </Heading>
                  <Text color="#374151" lineHeight="1.7" fontSize="16px">
                    If we fail at any time to insist upon strict performance of
                    any of your obligations under any of these Terms, or if we
                    fail to exercise any of the rights or remedies to which we
                    are entitled under these Terms, this shall not constitute a
                    waiver of such rights or remedies and shall not relieve you
                    from compliance with such obligations. A waiver by Us of any
                    default shall not constitute a waiver of any subsequent
                    default. No waiver by us of any of these Terms shall be
                    effective unless it is expressly stated to be a waiver and
                    is communicated to you in writing in accordance with these
                    Terms.
                  </Text>
                </Box>
              </VStack>
            </VStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <VStack align="stretch" spacing={4}>
              <Heading
                as="h2"
                size="lg"
                color="#111827"
                fontWeight="700"
                fontSize="20px"
              >
                29. Data Protection Officer / Data Protection Lead
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                For any questions or concerns regarding your personal data or
                the exercise of your data subject rights under the NDPR, please
                contact our Data Protection Officer/Lead at:
              </Text>
              <Text color="#374151" lineHeight="1.7" fontSize="16px" ml={4}>
                <strong>Email:</strong> [Your DPO/Data Protection Lead Email
                Address]
                <br />
                <strong>Phone:</strong> [Your DPO/Data Protection Lead Phone
                Number]
              </Text>
            </VStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <VStack align="stretch" spacing={4}>
              <Heading
                as="h2"
                size="lg"
                color="#111827"
                fontWeight="700"
                fontSize="20px"
              >
                30. Contact Information
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                To ask questions or comment about these Terms, please contact us
                at:
              </Text>
              <VStack align="stretch" spacing={2} ml={4}>
                <Text color="#374151" lineHeight="1.7" fontSize="16px">
                  <strong>RIGHTCRED DATA SOLUTIONS LIMITED</strong>
                  <br />
                  RC 8233667
                </Text>
                <Text color="#374151" lineHeight="1.7" fontSize="16px">
                  <strong>Address:</strong> 3A, CRESCENT B, OBA ADEYINKA OYEKAN
                  ESTATE, LEKKI PHASE 1, LAGOS STATE, NIGERIA
                </Text>
                <Text color="#374151" lineHeight="1.7" fontSize="16px">
                  <strong>Email:</strong> [Your Company General Email Address]
                </Text>
                <Text color="#374151" lineHeight="1.7" fontSize="16px">
                  <strong>Phone:</strong> [Your Company Phone Number, if
                  applicable]
                </Text>
              </VStack>
            </VStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <VStack align="stretch" spacing={4}>
              <Heading
                as="h2"
                size="lg"
                color="#111827"
                fontWeight="700"
                fontSize="20px"
              >
                31. Complaints
              </Heading>

              <Text color="#374151" lineHeight="1.7" fontSize="16px">
                If you have any complaints or reservations about us or any of
                the Services we provide, you may contact us via [Your Company
                General Email Address for Complaints].
              </Text>
            </VStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <VStack align="stretch" spacing={4}>
              <Heading
                as="h2"
                size="lg"
                color="#111827"
                fontWeight="700"
                fontSize="20px"
              >
                32. Frequently Asked Questions (FAQ)
              </Heading>

              <VStack align="stretch" spacing={6}>
                <Box>
                  <Text
                    color="#111827"
                    lineHeight="1.7"
                    fontSize="16px"
                    fontWeight="600"
                    mb={2}
                  >
                    Q1: What data do you collect through the App?
                  </Text>
                  <Text color="#374151" lineHeight="1.7" fontSize="16px">
                    A1: We collect the data that you, as the User, submit or
                    upload to the App for the purpose of generating risk
                    profiles. This may include various types of personal or
                    non-personal information depending on the nature of the risk
                    assessment. Please refer to our Privacy Policy for full
                    details.
                  </Text>
                </Box>

                <Box>
                  <Text
                    color="#111827"
                    lineHeight="1.7"
                    fontSize="16px"
                    fontWeight="600"
                    mb={2}
                  >
                    Q2: How do you ensure I have consent from data owners?
                  </Text>
                  <Text color="#374151" lineHeight="1.7" fontSize="16px">
                    A2: By using our App and submitting data, you explicitly
                    confirm and warrant that you have obtained all necessary and
                    legally valid consent from the data owner(s) for the
                    collection, processing, analysis, and sharing of their data
                    with our App and its partners, in compliance with NDPR. We
                    rely on your confirmation in this regard.
                  </Text>
                </Box>

                <Box>
                  <Text
                    color="#111827"
                    lineHeight="1.7"
                    fontSize="16px"
                    fontWeight="600"
                    mb={2}
                  >
                    Q3: Can you share the data I provide with other companies?
                  </Text>
                  <Text color="#374151" lineHeight="1.7" fontSize="16px">
                    A3: Yes, with your confirmed consent from the data owner,
                    and in compliance with NDPR, we may share and use the data
                    with our trusted Partner APIs. This is done to enhance
                    analytical capabilities, perform specific risk assessments,
                    or integrate with other relevant services. Any such sharing
                    will adhere to our Privacy Policy and applicable Nigerian
                    data protection laws.
                  </Text>
                </Box>

                <Box>
                  <Text
                    color="#111827"
                    lineHeight="1.7"
                    fontSize="16px"
                    fontWeight="600"
                    mb={2}
                  >
                    Q4: How long do you keep the data I submit?
                  </Text>
                  <Text color="#374151" lineHeight="1.7" fontSize="16px">
                    A4: We retain the data for as long as necessary to fulfil
                    the purposes for which it was collected, including providing
                    the Service, improving our algorithms, developing new
                    features, and complying with legal obligations under
                    Nigerian law. Where appropriate, data may be anonymised or
                    aggregated for long-term retention and research.
                  </Text>
                </Box>

                <Box>
                  <Text
                    color="#111827"
                    lineHeight="1.7"
                    fontSize="16px"
                    fontWeight="600"
                    mb={2}
                  >
                    Q5: Are the risk profiles generated by the App professional
                    advice?
                  </Text>
                  <Text color="#374151" lineHeight="1.7" fontSize="16px">
                    A5: No, the risk profiles and any other outputs from the App
                    are for informational purposes only. They are not intended
                    to constitute financial, legal, investment, or any other
                    form of professional advice. You should always seek
                    professional advice tailored to your specific circumstances.
                  </Text>
                </Box>

                <Box>
                  <Text
                    color="#111827"
                    lineHeight="1.7"
                    fontSize="16px"
                    fontWeight="600"
                    mb={2}
                  >
                    Q6: What happens if I provide data without proper consent?
                  </Text>
                  <Text color="#374151" lineHeight="1.7" fontSize="16px">
                    A6: You are solely responsible for obtaining all necessary
                    consents for any data you provide. If you provide data
                    without proper consent, you will be in breach of these Terms
                    and agree to indemnify us against any claims or liabilities
                    arising from such a breach. We may also terminate your
                    access to the App.
                  </Text>
                </Box>

                <Box>
                  <Text
                    color="#111827"
                    lineHeight="1.7"
                    fontSize="16px"
                    fontWeight="600"
                    mb={2}
                  >
                    Q7: What are my rights as a data subject under NDPR?
                  </Text>
                  <Text color="#374151" lineHeight="1.7" fontSize="16px">
                    A7: Under the NDPR, you have rights including the right to
                    access, rectify, erase ("right to be forgotten"), restrict
                    processing, port your data, and object to processing. You
                    also have rights regarding automated decision-making. Please
                    refer to Section 7 for more details and how to exercise
                    these rights.
                  </Text>
                </Box>
              </VStack>
            </VStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default TermsAndConditions;
