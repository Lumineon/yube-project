import styled from 'styled-components';
import { rem } from 'polished';

export const ProfilePageWrapper = styled.div`
  background-color: white;
  padding: ${rem(20)};
  min-height: 80vh;
`;

export const ProfilePageTitle = styled.h2``;

export const ProfilePageSubTitle = styled.h3`
  margin-top: ${rem(15)};
  padding-bottom: ${rem(15)};
  border-bottom: 1px solid;
`;

export const ProfileContent = styled.div`
  margin-top: ${rem(30)};
`;

export const ProfileItem = styled.p`
  font-size: ${rem(18)};
  margin: ${rem(5)} 0;

  span {
    font-weight: 700;
  }
`;

export const ProfileDefaultImage = styled.div`
  background-color: grey;
  width: ${rem(130)};
  height: ${rem(130)};
  border-radius: 100%;
`;

export const ProfilePhoto = styled.div`
  display: flex;
  margin-bottom: ${rem(20)};

  img {
    width: ${rem(120)};
    height: ${rem(120)};
    border-radius: 100%;
    margin-right: ${rem(15)};
  }
`;

export const Username = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${rem(16)};
  margin-top: ${rem(15)};

  span {
    font-size: ${rem(20)};
    font-weight: 700;
  }
`;