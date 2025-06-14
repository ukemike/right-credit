'use client';

import { Box, Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react';

import EmptyState from '~/lib/components/EmptyState';

import LoanSchedule from './tabs/LoanSchedule';
import LoanSummary from './tabs/LoanSummary';
import Repayments from './tabs/Repayments';

const CustomerTabs = () => {
  const data = [''];
  const tabs = [
    {
      header: 'Loan Summary/ Terms',
      component: (
        <Box>
          {data.length === 0 ? (
            <Box bg="#FAFBFF">
              <EmptyState
                title="No loan summary found"
                description="Loan summary will be displayed on this page"
              />
            </Box>
          ) : (
            <LoanSummary />
          )}
        </Box>
      ),
    },
    {
      header: 'Repayments',
      component: (
        <Box>
          {data.length === 0 ? (
            <Box bg="#FAFBFF">
              <EmptyState
                title="No repayments found"
                description="Repayments will be displayed on this page"
              />
            </Box>
          ) : (
            <Repayments />
          )}
        </Box>
      ),
    },
    {
      header: 'Loan Schedule',
      component: (
        <Box>
          {data.length === 0 ? (
            <Box bg="#FAFBFF">
              <EmptyState
                title="No loan schedule found"
                description="Loan schedule will be displayed on this page"
              />
            </Box>
          ) : (
            <LoanSchedule />
          )}
        </Box>
      ),
    },
    {
      header: 'Loan Collateral',
      component: (
        <Box bg="#FAFBFF">
          <EmptyState
            title="No loan collateral found"
            description="Loan collateral will be displayed on this page"
          />
        </Box>
      ),
    },
    {
      header: 'Loan Guarantor',
      component: (
        <Box bg="#FAFBFF">
          <EmptyState
            title="No loan guarantor found"
            description="Loan guarantor will be displayed on this page"
          />
        </Box>
      ),
    },
    {
      header: 'Documents',
      component: (
        <Box bg="#FAFBFF">
          <EmptyState
            title="No documents found"
            description="Documents will be displayed on this page"
          />
        </Box>
      ),
    },
    {
      header: 'Audit Logs',
      component: (
        <Box bg="#FAFBFF">
          <EmptyState
            title="No audit logs found"
            description="Audit logs will be displayed on this page"
          />
        </Box>
      ),
    },
    {
      header: 'Risk / Underwriting',
      component: (
        <Box bg="#FAFBFF">
          <EmptyState
            title="No risk / underwriting found"
            description="Risk / underwriting will be displayed on this page"
          />
        </Box>
      ),
    },
  ];

  return (
    <Tabs w="100%" variant="unstyled">
      <TabList
        overflowX="auto"
        whiteSpace="nowrap"
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        bg="white"
        py={2}
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
          >
            {tab.header}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabs.map((tab) => (
          <TabPanel key={tab.header} px={0}>
            {tab.component}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default CustomerTabs;
