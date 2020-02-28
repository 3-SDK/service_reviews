import http from "k6/http";
import { check, sleep } from "k6";

export default function () {
  const id = Math.floor(Math.random() * 1e7) + 1;
  let res = http.get(`http://localhost:3001/reviews/search?hotel=${id}&page=1`);
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 2000
  });
  sleep(0.01);
}