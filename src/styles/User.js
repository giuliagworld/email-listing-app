import { StyleSheet } from 'aphrodite';

let Sheet = StyleSheet.create({
  container: {
    margin: [15]
  },
  input: {
    marginTop: 5,
    marginBottom: 5,
    padding: [5],
    border: '1px solid blue'
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    padding: [5],
    borderRadius: 4,
    border: 'none',
    backgroundColor: 'orange',
    color: 'white',
    cursor: 'pointer'
  },
  saveButton: {
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    padding: [5],
    borderRadius: 4,
    border: 'none',
    backgroundColor: 'green',
    color: 'white',
    cursor: 'pointer'
  },
  deleteButton: {
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    padding: [5],
    borderRadius: 4,
    border: 'none',
    backgroundColor: 'red',
    color: 'white',
    cursor: 'pointer'
  },
  subscribedLabel: {
    display: 'inline',
    marginRight: 5,
    padding: [5],
    borderRadius: 4,
    backgroundColor: 'purple',
    color: 'white'
  },
  adminLabel: {
    display: 'inline',
    marginRight: 5,
    padding: [5],
    borderRadius: 4,
    backgroundColor: '#f4e842',
    color: 'black'
  },
  checkbox: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 20,
    height: 20
  },
  error: {
    color: 'rgb(255, 0, 0)'
  }
})

export default Sheet;