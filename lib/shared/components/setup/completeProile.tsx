'use client';

import { Grid, GridItem } from '@chakra-ui/react';

import { useAppSelector } from '~/lib/redux/store';

import SetupLeft from './setupLeft';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';

const CompleteProfile = () => {
  const { setupStep } = useAppSelector((state) => state.app.auth);
  return (
    <Grid
      templateColumns={{
        base: '1fr',
        md: 'repeat(5, 1fr)',
      }}
      gap={6}
      minH={{
        base: '100%',
        md: '100vh',
      }}
    >
      <GridItem
        colSpan={{
          base: 1,
          md: 2,
        }}
        bg="#F5F6F7"
        p="6"
        display={{
          base: 'none',
          md: 'block',
        }}
      >
        <SetupLeft />
      </GridItem>
      <GridItem
        colSpan={{
          base: 1,
          md: 3,
        }}
        py="6"
        px={{
          base: '4',
          md: '16',
        }}
      >
        {setupStep === 1 && <Step1 />}
        {setupStep === 2 && <Step2 />}
        {setupStep === 3 && <Step3 />}
        {setupStep === 4 && <Step4 />}
      </GridItem>
    </Grid>
  );
};

export default CompleteProfile;
