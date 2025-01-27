import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

interface SearchProps {
  query: string;
  onQueryChange: (newQuery: string) => void;
}

export const SearchInput = ({ query, onQueryChange }: SearchProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onQueryChange(e.target.value);
  };

  const handleSearch = (value: string) => {
    onQueryChange(value);
  };

  return (
    <div className='w-96'>
        <Search
          placeholder="Qidiruv kiriting"
          enterButton={<SearchOutlined />}
          value={query}
          onChange={handleChange}
          onSearch={handleSearch}
          size="large"
          allowClear
        />
    </div>
  );
}