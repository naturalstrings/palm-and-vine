import { FormEvent, FormEventHandler, useEffect, useState } from 'react';

export default function Sidebar() {
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
    const dataAndEvent: fDandE = { fd: submittedData, event: e };
    setResAndE(dataAndEvent);
  };

  useEffect(() => {
    let ignore = false;

    const innerSubmitHandler = async (result: fDandE) => {
      const keyRes = await fetch('api/w3fKey');
      const KEY = (await keyRes.json()) as string;
      result.fd.append('access_key', KEY);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: result.fd,
      });
      const data = (await response.json()) as Web3FormsResponse;
      const message = data.body.message
        ? data.body.message
        : 'Form Submitted Successfully!';
      setResult(message);
      if (!ignore && data.success) {
        setResAndE(undefined);
        // result.event.currentTarget.reset();
      } else {
        console.log('Error', data);
      }

      return message;
    };

    if (resAndE) {
      innerSubmitHandler(resAndE)
        .then(() => {})
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
          For rates and booking sessions at Palm & Vine Recorders, please
          contact us at <br />
          203-213-7332 or fill out the form below. We recommend a phone
          conversation to discuss an individualized approach to your
          project&apos;s needs.
        </p>
        <hr></hr>
        <form onSubmit={onSubmit} id="booking-form">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
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
        {result ? <p>{result}</p> : <span></span>}
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
