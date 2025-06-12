'use client';

import { VStack, Box, Image, Text, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProfileMenu = () => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState('profile');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const path = pathname.split('/').pop();
    if (path) setActiveMenu(path);
  }, [pathname]);

  const profileMenu = [
    {
      icon: '/images/personal.svg',
      iconActive: '/images/personal-active.svg',
      title: 'Personal Details',
      type: 'personal-details',
      active: activeMenu === 'personal-details',
    },
    // {
    //   icon: '/images/business.svg',
    //   iconActive: '/images/business-active.svg',
    //   title: 'Business Information',
    //   type: 'business-information',
    //   active: activeMenu === 'business-information',
    // },
    // {
    //   icon: '/images/doc-2.svg',
    //   iconActive: '/images/doc-active.svg',
    //   title: 'Documents',
    //   type: 'documents',
    //   active: activeMenu === 'documents',
    // },
    {
      icon: '/images/data.svg',
      iconActive: '/images/data-active.svg',
      title: 'Data Protection Officer',
      type: 'data-protection-officer',
      active: activeMenu === 'data-protection-officer',
    },
    {
      icon: '/images/security.svg',
      iconActive: '/images/security.svg',
      title: 'Security',
      type: 'security',
      active: activeMenu === 'security',
    },
  ];

  return (
    <Box w="100%" bg="white" borderRadius={6}>
      <VStack alignItems="stretch" spacing={0}>
        <Text
          fontSize="14px"
          fontWeight="500"
          color="bodyText.500"
          px={6}
          pt={4}
          textTransform="uppercase"
        >
          Profile details
        </Text>
        {profileMenu.map((item, index) => (
          <HStack
            key={index}
            spacing={3}
            py={4}
            px={6}
            _hover={{ bg: 'brand.300' }}
            cursor="pointer"
            borderRadius={6}
            transition="all 0.3s ease"
            bg={item.active ? 'brand.300' : 'transparent'}
            as={Link}
            href={`/dashboard/profile/${item.type}`}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Image
              src={
                item.active || hoveredItem === index
                  ? item.iconActive
                  : item.icon
              }
              alt="account"
              boxSize="20px"
            />
            <Text
              color={
                item.active || hoveredItem === index
                  ? 'brand.100'
                  : 'bodyText.200'
              }
              fontSize="14px"
              fontWeight={item.active || hoveredItem === index ? '700' : '500'}
            >
              {item.title}
            </Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default ProfileMenu;
