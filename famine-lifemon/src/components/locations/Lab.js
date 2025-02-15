import React, { useState } from 'react'

import { TextField, MenuItem } from '@mui/material';

const Lab = ({ setFormData }) => {
  const [type, setType] = useState(true);
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(true);

  return (
    <>
      <TextField
        required
        id="type-select"
        size='large'
        value={type}
        label="Type"
        onChange={e => {
          const value = e.target.value;
          setType(value);
          setAmount(1);
          setResult(true);
          setFormData({
            food: -1,
            happiness: -1,
            money: type ? 30 : 130,
            charity: 0,
            married: false,
          });
        }}
        sx={{width: '20em'}}
        select
        fullWidth
        margin='dense'
      >
        <MenuItem key={0} value={true}>Scientist</MenuItem>
        <MenuItem key={1} value={false}>Researcher</MenuItem>
      </TextField>
      {
        (type) ?
          <TextField
            required
            id="amount-select"
            size='large'
            value={amount}
            label="Amount"
            onChange={e => {
              const value = e.target.value;
              setAmount(value);
              setFormData({
                food: -1,
                happiness: -1,
                money: amount * 30,
                charity: 0,
                married: false,
              });
            }}
            sx={{width: '20em'}}
            select
            fullWidth
            margin='dense'
          >
            {
              (Array.from({length: 10}, (_, i) => i + 1)).map(i => 
                <MenuItem key={i} value={i}>{i}</MenuItem>
              )
            }
          </TextField> :
          <TextField
          required
          id="result-select"
          size='large'
          value={result}
          label="Result"
          onChange={e => {
            const value = e.target.value;
            setResult(value);
            setFormData({
              food: -1,
              happiness: -1,
              money: result ? 300 : 120,
              charity: 0,
              married: false,
            });
          }}
          sx={{width: '20em'}}
          select
          fullWidth
          margin='dense'
        >
          <MenuItem key={0} value={true}>Successful</MenuItem>
          <MenuItem key={1} value={false}>Fail</MenuItem>
        </TextField>
      }
    </>
  )
}

export default Lab;
