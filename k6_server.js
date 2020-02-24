import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  const res = http.get(`http://localhost:3000/`);
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 2000
  });
  sleep(.001);
}
