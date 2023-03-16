export default function generateUniqueId() {
  let randomNumber = Math.floor(Math.random() * 100000);
  var c = 1;
  var d = new Date(),
    m = d.getMilliseconds() + "",
    u = ++d + m + (++c === 10000 ? (c = 1) : c);

  return randomNumber + u.toString().slice(12);
}
