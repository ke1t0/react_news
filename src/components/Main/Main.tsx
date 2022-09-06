import { Box, Container } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { FC } from 'react';
import ArticleList from '../ArticleList/ArticleList';
import Tab from '../Tab/Tab';
import Tabs from '../Tab/Tabs';

type Props = {
  userId: string;
  id: string;
  title: string;
  body: string;
}[];

const Main: FC = () => {
  const [topArticles, setTopArticles] = useState<Props>([]);
  const [newArticles, setNewArticles] = useState<Props>([]);
  const [bestArticles, setBestArticles] = useState<Props>([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [testA, setTestA] = useState([]);
  const urlList = {
    top: 'https://hacker-news.firebaseio.com/v0/topstories.json',
    new: 'https://hacker-news.firebaseio.com/v0/newstories.json',
    best: 'https://hacker-news.firebaseio.com/v0/beststories.json',
  };

  const [url, setUrl] = useState(
    'https://hacker-news.firebaseio.com/v0/topstories.json'
  );

  const getTop = async (id: string) => {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    const jsonData = await response.json();
    return jsonData;
  };
  console.log(getTop('32548905'));

  useEffect(() => {
    const fetchData = async () => {
      let response;
      let data;
      let idList;

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
  }, []);
  console.log(testA);

  return (
    <Box component='main'>
      <Container sx={{ py: 3 }}>
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
          <Tab title='トップ'>
            <ArticleList articles={topArticles} />
          </Tab>
          <Tab title='新着'>
            <ArticleList articles={newArticles} />
          </Tab>
          <Tab title='ベスト'>
            <ArticleList articles={bestArticles} />
          </Tab>
        </Tabs>
      </Container>
    </Box>
  );
};

export default Main;
