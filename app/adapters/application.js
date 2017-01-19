import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://ec2-52-45-26-25.compute-1.amazonaws.com:5050',
	namespace: 'dev',
  headers: {
    "Gtw-Sec-User-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVkZW50aWFsIjp7InBlcnNvbklkIjo3NjI3ODY1LCJ1c2VySWQiOjk2NzExLCJuYW1lIjoiVElNRSIsImNwZiI6IjQxMDUyOTY0ODUwIiwiYnJhbmNoSWQiOjEwMDAsImFnZW50U2lnbiI6IlciLCJ1c2VyIjoiTVRaQ1BENjAwIn0sInN5c3RlbXMiOlt7InN5c3RlbUNvZGUiOjEsImNsaWVudElEIjo3MTEyOTk0NDY3Mzg4NTkwLCJleHBpcmVzT24iOiIyMDE2LTA3LTA2VDIwOjU4OjQ4LjAwMC0wMzowMCIsImFjdGl2ZSI6IlMgIn0seyJzeXN0ZW1Db2RlIjozLCJjbGllbnRJRCI6NzExMjk5NDQ2NzM4ODU5MSwiZXhwaXJlc09uIjoiMjAxNi0wNy0wNlQyMDoxMzo0OC4wMDAtMDM6MDAiLCJhY3RpdmUiOiJTICJ9XSwiaWF0IjoxNDY3ODQ1OTI2fQ.UJ-ijCm_fjTgSwoTQ4JgVn4hyQrQYWQfFIWzJZUwCT0",
    "Gtw-Transaction-Id": "1234567890"
  }
});
