fetch('/api/admins', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN'
  }
})
  .then(res => res.json())
  .then(admins => {
    const ul = document.createElement('ul');

    admins.forEach(admin => {
      const li = document.createElement('li');
      li.textContent = ${admin.name} (${admin.email});
      ul.appendChild(li);
    });

    document.body.appendChild(ul);
  })
  .catch(err => console.error(err));
