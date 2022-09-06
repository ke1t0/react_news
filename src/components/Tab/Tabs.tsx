/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { FC, ReactElement, useState } from 'react';
import TabTitle from './TabTitle';

interface Props {
  selectedTab: number;
  setSelectedTab: (index: number) => void;
  children: ReactElement[];
}

const Tabs: FC<Props> = ({ selectedTab, setSelectedTab, children }) => {
  //   const [selectedTab, setSelectedTab] = useState(0);
  const [testA, setTestA] = useState([]);
  const urlList = {
    top: 'https://hacker-news.firebaseio.com/v0/topstories.json',
    new: 'https://hacker-news.firebaseio.com/v0/newstories.json',
    best: 'https://hacker-news.firebaseio.com/v0/beststories.json',
  };

  const [url, setUrl] = useState(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  );

  useEffect(() => {
    const fetchData = async () => {
      let response;
      let data;
      switch (selectedTab) {
        case 0:
          setUrl(urlList.top);
          response = await fetch(url);
          data = await response.json();
          setTestA(data.slice(0, 10));
          break;
        case 1:
          setUrl(urlList.new);
          response = await fetch(url);
          data = await response.json();
          setTestA(data.slice(0, 10));
          break;
        case 2:
          setUrl(urlList.best);
          response = await fetch(url);
          data = await response.json();
          setTestA(data.slice(0, 10));
          break;
      }
    };
    fetchData();
  }, [selectedTab, url, urlList.top, urlList.new, urlList.best]);

  return (
    <>
      <Box
        component='div'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          columnGap: '0.7rem',
          padding: 0,
        }}
      >
        {children.map((item, index: number) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </Box>

      {children[selectedTab]}
    </>
  );
};

export default Tabs;
