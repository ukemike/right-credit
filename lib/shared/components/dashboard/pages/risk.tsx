'use client';

import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  HStack,
  Text,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';

import Address from '../../modals/Address';
import BankStatement from '../../modals/BankStatement';
import BankStatementAnalysis from '../../modals/BankStatementAnalysis';
import Cac from '../../modals/Cac';
import IdCard from '../../modals/IdCard';
import RiskTable from '../../risk/RiskTable';
import RiskTable2 from '../../risk/RiskTable2';
import Modal from '../../ui/Modal';

type ReportType =
  | 'BVN'
  | 'NIN'
  | "Driver's License"
  | "Voter's Card"
  | 'Nigerian Passport'
  | 'CAC'
  | 'Address'
  | 'Credit Report'
  | 'Bank Statement'
  | 'Bank Statement Analysis'
  | 'Direct Debit';

const RiskComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState<ReportType | null>(null);

  const tabs = [
    {
      header: 'Pending Request (23)',
      component: <RiskTable />,
    },
    {
      header: 'Completed',
      component: <RiskTable2 />,
    },
  ];

  const menuItems = [
    {
      name: 'BVN Verification Report - Basic',
      value: 'BVN',
    },
    {
      name: 'National ID Card verification',
      value: 'NIN',
    },
    {
      name: "Driver's License Number verification",
      value: "Driver's License",
    },
    {
      name: "Voter's Card verification",
      value: "Voter's Card",
    },
    {
      name: 'Nigerian Passport verification',
      value: 'Nigerian Passport',
    },
    {
      name: 'CAC verification',
      value: 'CAC',
    },
    {
      name: 'Address Verification',
      value: 'Address',
    },
    {
      name: 'Credit Report',
      value: 'Credit Report',
    },
    {
      name: 'Bank Statement Request',
      value: 'Bank Statement',
    },
    {
      name: 'Bank Statement Analysis',
      value: 'Bank Statement Analysis',
    },
    {
      name: 'Direct Debit - (coming soon)',
      value: 'Direct Debit',
    },
  ];

  const openModal = (type: ReportType) => {
    setType(type);
    setIsModalOpen(true);
  };

  const renderModalBody = () => {
    switch (type) {
      case 'BVN':
        return <IdCard name="BVN Verification Report - Basic" />;
      case 'NIN':
        return <IdCard name="National ID Card" />;
      case "Driver's License":
        return <IdCard name="Driver's License Number" />;
      case "Voter's Card":
        return <IdCard name="Voter's Card" />;
      case 'Nigerian Passport':
        return <IdCard name="Nigerian Passport" />;
      case 'CAC':
        return <Cac />;
      case 'Address':
        return <Address />;
      case 'Credit Report':
        return <Text p={4}>Credit Report coming soon</Text>;
      case 'Bank Statement':
        return <BankStatement />;
      case 'Bank Statement Analysis':
        return <BankStatementAnalysis />;
      case 'Direct Debit':
        return <Text p={4}>Direct Debit coming soon</Text>;
      default:
        return <Text p={4}>Select a verification type</Text>;
    }
  };

  return (
    <Box bg="white" borderRadius="8px" boxShadow="sm" p={4}>
      <VStack
        alignItems="flex-start"
        spacing={0}
        borderBottom="1px solid #E5E7EB"
        pb="4"
      >
        <HStack justifyContent="space-between" w="100%">
          <VStack alignItems="flex-start" spacing={0}>
            <Text fontSize="xl" fontWeight="700" color="bodyText.100">
              Risk / Underwriting
            </Text>
            <Text fontSize="14px" fontWeight="400" color="bodyText.200">
              Underwrite/Ascertain customer risk from this page
            </Text>
          </VStack>

          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon color="brand.100" fontSize="14px" />}
              variant="outline"
              size="md"
              borderRadius="full"
              color="brand.100"
              borderColor="brand.100"
              fontSize="14px"
              fontWeight="700"
              bg="white"
            >
              Actions
            </MenuButton>
            <MenuList>
              {menuItems.map((item) => (
                <MenuItem
                  key={item.value}
                  fontSize="14px"
                  fontWeight="500"
                  color="#374151"
                  py={2}
                  px={3}
                  onClick={() => openModal(item.value as ReportType)}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </HStack>
      </VStack>

      <Tabs w="100%" variant="unstyled" my="4">
        <HStack
          justifyContent="space-between"
          w="100%"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'flex-start', md: 'center' }}
        >
          <TabList
            overflowX="auto"
            sx={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.header}
                _selected={{
                  color: 'brand.100',
                  fontWeight: '700',
                  fontSize: '14px',
                  borderBottom: '2px solid #0052CC',
                }}
                fontSize="14px"
                color="bodyText.200"
                fontWeight="400"
                style={{
                  textWrap: 'nowrap',
                }}
              >
                {tab.header}
              </Tab>
            ))}
          </TabList>
          <HStack
            justifyContent="flex-end"
            gap={2}
            w={{ base: '100%', md: 'auto' }}
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'flex-start', md: 'center' }}
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Image src="/images/search-2.svg" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search name, email or ID"
                focusBorderColor="brand.100"
                borderColor="border.100"
                borderRadius="full"
                fontSize="sm"
                fontWeight="400"
                color="bodyText.200"
                _placeholder={{
                  color: 'bodyText.200',
                }}
                _focus={{
                  borderColor: 'brand.100',
                }}
                w={{ base: '100%', md: '200px' }}
              />
            </InputGroup>

            <Input
              placeholder="Filter by date"
              borderRadius="full"
              type="date"
              fontSize="sm"
              fontWeight="400"
              color="bodyText.200"
            />
          </HStack>
        </HStack>

        <TabPanels>
          {tabs.map((tab) => (
            <TabPanel key={tab.header} px={0}>
              {tab.component}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="lg"
        body={renderModalBody()}
      />
    </Box>
  );
};

export default RiskComponent;
