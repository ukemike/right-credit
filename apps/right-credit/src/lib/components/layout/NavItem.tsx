'use client';

import type { FlexProps } from '@chakra-ui/react';
import { Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavItemProps extends FlexProps {
  icon: string;
  children: React.ReactNode;
  path?: string;
  iconActive: string;
  onClick?: () => void;
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  const pathname = usePathname();
  const [onHover, setOnHover] = useState(false);
  return (
    <Link
      href={rest.path || '#'}
      style={{ textDecoration: 'none' }}
      onClick={rest.onClick}
    >
      <Flex
        align="center"
        p="3"
        mb="1"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'brand.300',
          color: 'brand.100',
        }}
        bg={
          pathname &&
          rest.path &&
          (pathname === rest.path ||
            (pathname.startsWith(`${rest.path}/`) &&
              rest.path !== '/dashboard'))
            ? 'brand.300'
            : 'transparent'
        }
        color={
          onHover ||
          (pathname &&
            rest.path &&
            (pathname === rest.path ||
              (pathname.startsWith(`${rest.path}/`) &&
                rest.path !== '/dashboard')))
            ? 'brand.100'
            : 'bodyText.200'
        }
        fontWeight="regular"
        fontSize="14px"
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        {...rest}
      >
        <Image
          src={onHover || pathname === rest.path ? rest.iconActive : icon}
          alt="icon"
          width="20px"
          height="20px"
          mr="4"
        />
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
