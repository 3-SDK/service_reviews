import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  const data = {
    userId: 1,
    rating: 5,
    stay_month: 2,
    stay_year: 2020,
    traveler_type: 'Solo',
    language: 'en',
    review_date: '2020-02-04',
    review_title: 'title1',
    review_text: 'text. text. text',
  };

  const payload = JSON.stringify(data);
  const params = { headers: { 'Content-Type': 'application/json' } };
  const id = Math.floor(Math.random() * 1e7) + 1;
  const res = http.post(`http://localhost:3001/hotels/${id}/review`, payload, params);
  check(res, {
    "status was 201": (r) => r.status == 201,
    "transaction time OK": (r) => r.timings.duration < 2000
  });
  sleep(.01);
}
