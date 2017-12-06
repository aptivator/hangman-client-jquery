<div>
  <% _.range(97, 123).forEach(code => { %>
  <% let letter = String.fromCharCode(code) %>
    <div class = "letter-control <%= letter %>"><%= letter %></div>
  <% }); %>
</div>
