let approved_list = [
  'usadapekora@example.com',
  'sakamatachloe@example.com',
  'myemailgg@example.com',
  'yamadalaplus@example.com'
];

const sendEmail = (email) =>{
  console.log(`Email sent to ${email}!`)
};

//parametro 2 é a posição do item no array
//parâmetro 3 é a quantidade de pessoas, por isso o length
approved_list.forEach((item, position, array) => {
  sendEmail(item);
  console.log(`Your position is: ${position}`);
  console.log(`In this Test we have ${array.length} candidates`);
})

