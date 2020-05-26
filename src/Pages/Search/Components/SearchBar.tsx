import React, { FC, memo, useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { StyledButton, StyledForm } from './Styles';
import countryList from 'Data/countries.json';
import { SearchDataParam } from 'Model';
import DirectoryList from './DirectoryList';

export interface Props {
  onSubmit: (param: SearchDataParam) => void;
  isLoading: boolean;
}

const SearchBar: FC<Props> = ({ onSubmit, isLoading }) => {
  const [country, setCountry] = useState<string>('AF');
  const [name, setName] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [zip, setZip] = useState<string>('');

  return (
    <>
    <StyledForm>
      <FormGroup>
        <Label for="country">Country</Label>
        <Input
          type="select"
          name="country"
          id="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
        {countryList.map((item) => {
          return (
            <option key={item.Code} value={item.Code}>{item.Name}</option>
          );
        })}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="companyName">Company Name</Label>
        <Input
          type="text"
          name="companyName"
          id="companyName"
          placeholder="Einstein Cafe"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="street">Street and Number</Label>
        <Input
          type="text"
          name="street"
          id="street"
          placeholder="UNTER DEN LINDEN 42"
          value={street}
          onChange={(event) => setStreet(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="street">ZIP/Postcode</Label>
        <Input
          type="text"
          name="zip"
          id="zip"
          placeholder="10117"
          value={zip}
          onChange={(event) => setZip(event.target.value)}
        />
      </FormGroup>
      <StyledButton color="primary" onClick={() => onSubmit({
        country,
        name,
        street,
        zip
        })}>
          {isLoading ? 'Searching...' : 'Check Now'}
      </StyledButton>
    </StyledForm>
    <br />
    <DirectoryList country={country} />
    </>
  );
};

export default memo(SearchBar);
