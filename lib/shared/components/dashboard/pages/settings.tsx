'use client';

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

import EmptyState from '../../EmptyState';
import UsersTable from '../../settings/UsersTable';
import AddUser from '@shared/components/modals/AddUser';
import ModalComponent from '@shared/components/ui/Modal';

const SettingsComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [type, setType] = useState<'user' | 'role'>('user');

  const handleModal = ({ type }: { type: 'user' | 'role' }) => {
    setIsOpen(!isOpen);
    // setType(type);
  };

  return (
    <Box bg="white" borderRadius="8px" boxShadow="sm" p={4}>
      <VStack
        alignItems="flex-start"
        spacing={0}
        borderBottom="1px solid #E5E7EB"
        pb="4"
      >
        <Text fontSize="xl" fontWeight="700" color="bodyText.100">
          User Management
        </Text>
        <Text fontSize="14px" fontWeight="400" color="bodyText.200">
          Manage your team members and their account permissions here
        </Text>
      </VStack>

      <Tabs variant="unstyled" mt={4}>
        <TabList>
          <Tab
            _selected={{
              color: '#0052CC',
              bg: '#1B59F812',
              fontWeight: '500',
              fontSize: '14px',
              borderRadius: '10px',
              height: 12,
            }}
          >
            Roles & Permissions
          </Tab>
          <Tab
            _selected={{
              color: '#0052CC',
              bg: '#1B59F812',
              fontWeight: '500',
              fontSize: '14px',
              borderRadius: '10px',
              width: 120,
              height: 12,
            }}
          >
            Users
          </Tab>
        </TabList>
        <TabPanels mt={2} borderTop="1px solid #E5E7EB">
          <TabPanel bg="#FAFBFF">
            <EmptyState
              title="No roles created yet"
              description="Roles will show up here once you have successfully created them"
              btnText="Create New Role"
            />
          </TabPanel>

          <TabPanel bg="white" px={0}>
            <UsersTable onClick={() => handleModal({ type: 'user' })} />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <ModalComponent
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="xl"
        body={<AddUser />}
      />
    </Box>
  );
};

export default SettingsComponent;
