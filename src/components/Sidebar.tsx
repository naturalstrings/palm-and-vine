import { FormEvent, FormEventHandler, useEffect, useState } from 'react';
import { env } from 'node:process';

export default function Sidebar() {
  // 6fe225f6-bf0d-42cc-b998-68b19de6ddab
  interface Web3FormsResponse {
    statusCode: number;
    success: boolean;
    body: {
      data: object;
      message: string;
    };
  }

  interface fDandE {
    fd: FormData;
    event: FormEvent<HTMLFormElement>;
  }
  const [result, setResult] = useState('');
  const [resAndE, setResAndE] = useState<fDandE>();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setResult('Sending....');
    const submittedData = new FormData(e.currentTarget);
    const result: fDandE = { fd: submittedData, event: e };
    setResAndE(result);
  };

  useEffect(() => {
    let ignore = false;

    const innerSubmitHandler = async () => {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: resAndE?.fd,
      });
      const data = (await response.json()) as Web3FormsResponse;
      return data;
    };

    if (resAndE) {
      const KEY: string = env.WEB3FORMACCESSKEY!;
      resAndE.fd.append('access_key', KEY);
      innerSubmitHandler()
        .then((data) => {
          if (!ignore && data.success) {
            resAndE.event.currentTarget.reset();
            setResult('Form Submitted Successfully');
          } else {
            console.log('Error', data);
            setResult(data.body.message);
          }
        })
        .catch((err) => {
          console.log('--> Error in innerSubmitHandler:', err);
        });
      //cleanup
      return () => {
        ignore = true;
      };
    }
  }, [resAndE]);

  return (
    <div className="sidebar">
      <div className="booking">
        <h2>Booking</h2>
        <p>
          For rates and booking sessions at Palm & Vine Recorders, please //
          contact us at <br />
          203-213-7332 or fill out the form below. We recommend a phone //
          conversation to discuss an individualized approach to your //
          project&apos;s needs. //{' '}
        </p>
        <hr></hr>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              autoComplete="family-name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="tel"
              required
            />
          </div>
          <div>
            <label htmlFor="description">
              Brief Description of Your Project
            </label>
            <textarea
              rows={6}
              cols={35}
              name="description"
              id="description"
              required
            />
          </div>
          <p>
            <span>*</span>All fields required.
          </p>
          <button type="submit">Submit Form</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

// original return
// return (
//   <div className="sidebar">
//     <div className="booking">
//       <h2>Booking</h2>
//       <p>
//         For rates and booking sessions at Palm & Vine Recorders, please
//         contact us at <br />
//         203-213-7332 or fill out the form below. We recommend a phone
//         conversation to discuss an individualized approach to your
//         project&apos;s needs.
//       </p>
//       <hr></hr>
//       <form action="/api/form" method="POST">
//         <div>
//           <label htmlFor="firstName">First Name</label>
//           <input
//             type="text"
//             name="firstName"
//             id="firstName"
//             autoComplete="given-name"
//             required
//           />
//         </div>
//         <div>
//   <label htmlFor="lastName">Last Name</label>
//   <input
//     type="text"
//     name="lastName"
//     id="lastName"
//     autoComplete="family-name"
//     required
//   />
// </div>
// <div>
//   <label htmlFor="email">Email Address</label>
//   <input
//     type="email"
//     name="email"
//     id="email"
//     autoComplete="email"
//     required
//   />
// </div>
// <div>
//   <label htmlFor="phone">Phone Number</label>
//   <input
//     type="text"
//     name="phone"
//     id="phone"
//     autoComplete="tel"
//     required
//   />
// </div>
// <div>
//   <label htmlFor="description">
//     Brief Description of Your Project
//   </label>
//   <textarea
//     rows={6}
//     cols={35}
//     name="description"
//     id="description"
//     required
//   />
// </div>
// <p>
//   <span>*</span>All fields required.
// </p>
//         <button>Submit</button>
//       </form>
//     </div>
//   </div>
// );
