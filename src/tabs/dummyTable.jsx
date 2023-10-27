import './DummyComponent.css';
import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../AppContext';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const DummyTable = () => {
  const [data, setData] = useState([]);
  const [fetched, setFetched] = useState(false); // Add fetched state

  const { showFrame } = useContext(AppContext);

  useEffect(() => {
    if (!fetched) {
      const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/quotes');
        const result = await response.json();
        setData(result.quotes);
        setFetched(true); // Set fetched to true after data is retrieved
      };
      fetchData();
    }
  }, [fetched]); // Run the effect only when fetched changes

  const handleCopy = (e, quote) => {
    navigator.clipboard.writeText(quote);
    e.target.innerText = 'Copied!';
    setTimeout(() => {
      e.target.innerText = ' Copy ';
    }, 2000);
  };

  return (
    <div className="table-container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 440 }} stickyHeader aria-label="simple table">
          <section className="table-head">
            <TableHead>
              <TableRow className="flex-row">
                <TableCell className="flex-grow"><b>Quote</b></TableCell>
                <TableCell align="right" className="flex-end"><b>Author</b></TableCell>
                <TableCell align="right" className="flex-end"><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
          </section>
          <section style={{ height: showFrame ? 'calc(42dvh + 1px)' : 'calc(77dvh + 1px)' }} className="table-body">
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    <span className="table-quote">{row.quote}</span>
                  </TableCell>
                  <TableCell align="right">{row.author}</TableCell>
                  <TableCell align="right">
                    <Button onClick={(e) => handleCopy(e, row.quote)} className="copy-button">
                      {' Copy '}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </section>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DummyTable;
