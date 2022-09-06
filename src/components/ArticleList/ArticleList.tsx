import { Box } from '@mui/material';
import { FC } from 'react';

type Props = {
  articles: {
    userId: string;
    id: string;
    title: string;
    body: string;
  }[];
};
const ArticleList: FC<Props> = ({ articles }) => {
  return (
    <Box sx={{ px: 2, py: 1, border: 'solid 1px black' }}>
      <Box
        component='ul'
        sx={{ m: 0, p: 0, listStyle: 'none', display: 'grid', gridGap: '1rem' }}
      >
        {articles.map((articles, i) => (
          <Box key={i} sx={{ border: '1px solid black', p: 1 }}>
            <h4>【Title】: {articles.title}</h4>
            <p>【Body】: {articles.body}</p>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ArticleList;
