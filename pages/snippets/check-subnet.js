// Функция перевода IPv4-строки в 32-битное число
function ipToInt(ip) {
  return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
}

// Проверка вхождения IP в подсеть CIDR 
function isIpInCidr(ip, cidr) {
  const [range, bits = 32] = cidr.split('/');
  const mask = ~(2 ** (32 - parseInt(bits, 10)) - 1) >>> 0;
  return (ipToInt(ip) & mask) === (ipToInt(range) & mask);
}

async function checkUserIp() {
  try {
    // Запрашиваем внешний IP пользователя
    const response = await fetch('https://ipify.org');
    const data = await response.json();
    const userIp = data.ip;

    if (!isIpInCidr(userIp, '30.12.11.0/24')) {
      alert(`Ваш IP (${userIp}) не входит в доверенную подсеть.`);
    }
  } catch (error) {
    console.error('Не удалось определить IP-адрес:', error);
  }
}

checkUserIp();