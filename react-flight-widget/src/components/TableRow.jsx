import TableCell from './TableCell'

const TableRow = ({ flight }) => {

  const words = Object.values(flight)

  console.log(words)
  
    return (
      <tr>
        <td><i class="fa-solid fa-plane"></i></td>
        {words?.map((word, index) => ( <TableCell key={index} word={word} />))}
      </tr>
    )
  }
  
  export default TableRow