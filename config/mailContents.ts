const CONTACT_US_FORM_TEMPLATE = (data: any) => {
  return `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Contact Us Submission</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                color: #333;
              }
              .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 10px;
              }
              .header {
                background-color: #FF7B02;
                color: white;
                padding: 10px 0;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .content {
                padding: 20px;
              }
              .footer {
                background-color: #f1f1f1;
                text-align: center;
                padding: 10px;
                border-radius: 0 0 10px 10px;
                color: #777;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Contact Us Submission</h2>
              </div>
              <div class="content">
                <p>Dear Admin,</p>
                <p>You have received a new contact us form submission.</p>
                <p><strong>Details:</strong></p>
                <ul>
                  <li><strong>Name:</strong> ${data.name}</li>
                  <li><strong>Email:</strong> ${data.email}</li>
                  <li><strong>Subject:</strong> ${data.subject}</li>
                  <li><strong>Message:</strong> ${data.message}</li>
                </ul>
                <p>Please respond to this inquiry at your earliest convenience.</p>
              </div>
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Southern Convergence Technologies Corporation. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `;
};

const EVENT_REGISTRATION_TEMPLATE = (data: any) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long', // "Monday"
    year: 'numeric', // "2023"
    month: 'long', // "July"
    day: 'numeric', // "24"
  });

  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const deadlineDate = new Date(data.eventDeadline).toLocaleDateString('en-US', {
    weekday: 'long', // "Monday"
    year: 'numeric', // "2024"
    month: 'long', // "July"
    day: 'numeric', // "24"
  });

  return `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Event Registration Submission</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                color: #333;
              }
              .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 10px;
              }
              .header {
                background-color: #4CAF50; /* Green for events */
                color: white;
                padding: 10px 0;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .content {
                padding: 20px;
              }
              .footer {
                background-color: #f1f1f1;
                text-align: center;
                padding: 10px;
                border-radius: 0 0 10px 10px;
                color: #777;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Event Registration Received</h2>
              </div>
              <div class="content">
                <p>Dear Team,</p>
                <p>You have received a new registration for the event on <strong>${data.eventDeadline ? deadlineDate : 'TBC'}</strong>.</p>
                <p><strong>Event Name:</strong> ${data.eventName}</p>
                <p><strong>Registrant Details:</strong></p>
                <ul>
                  <li><strong>First Name:</strong> ${data.firstName}</li>
                  <li><strong>Surname:</strong> ${data.surname}</li>
                  <li><strong>Company:</strong> ${data.company}</li>
                  <li><strong>Position:</strong> ${data.position}</li>
                  <li><strong>Email:</strong> ${data.email}</li>
                  <li><strong>Phone Number:</strong> ${data.number}</li>
                </ul>
                <p>This form was submitted on <strong>${formattedTime} UTC+8 | ${formattedDate}</strong>.</p>
                <p>Please respond to this registration at your earliest convenience.</p>
              </div>
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Southern Convergence Technologies Corporation. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `;
};

const DEVJAM_QUEUE_MAIL_TEMPLATE = (payload: any) => {
  return `
  <div>
  <table
    align="center"
    role="presentation"
    cellspacing="0"
    cellpadding="0"
    border="0"
    width="600"
    id="mktoContainer"
    style="margin: auto; font-family: Times; font-size: medium; table-layout: fixed;"
  >
    <tbody>
      <tr id="fullwidthBannerModule">
        <td align="center" style="padding: 0;">
          <div id="fullwidthBannerModuleImage01" style="margin: 0;">
            <a
              href="${payload.emailContent.eventPageLink}"
              style="color: blue; margin: 0;"
              target="_blank"
              ><img
                src="${payload.emailContent.eventBannerPageLink}"
                width="600"
                style="width: 600px; max-width: 600px; height: auto; margin: auto; display: block;"
                alt="Dev Jam 2024 Banner"
            /></a>
          </div>
        </td>
      </tr>
      <tr id="textBannerCta">
        <td style="padding: 20px 30px;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 auto;">
            <tbody>
              <tr>
                <td align="left" style="padding: 0; font-family: Verdana; font-size: 10px; line-height: 16px; color: #C2CADF; font-weight: 700;">
                  <p style="margin: 0;">${payload.emailContent.shortHeadline}</p>
                </td>
              </tr>
              <tr>
                <td height="15" style="height: 15px;">&nbsp;</td>
              </tr>
              <tr>
                <td align="left" style="padding: 0; font-family: Verdana; font-size: 14px; line-height: 24px;">
                  <p style="margin: 0;">Dear ${payload.firstName},</p>
                </td>
              </tr>
              <tr>
                <td align="left" style="padding: 0; font-family: Verdana; font-size: 14px; line-height: 24px;">
                  <p style="margin: 0;">
                    <br />
                    <b>${payload.emailContent.headline}</b>
                  </p>
                </td>
              </tr>
              <tr>
                <td align="left" style="padding: 0; font-family: Verdana; font-size: 14px; line-height: 24px;">
                  <p style="margin: 0;">
                    <br />
                    ${payload.emailContent.body}
                  </p>
                </td>
              </tr>
              <tr>
                <td align="left" style="padding: 0; font-family: Verdana; font-size: 14px; line-height: 24px;">
                  <p style="margin: 0;">
                    <br />
                    <p>Best regards,</p>
                    <p>${payload.emailContent.salutation}</p>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr id="footerDarkModule" style="background-color: black;">
        <td dir="ltr" width="100%" style="padding: 20px 30px;">
          <table dir="ltr" role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0 auto;">
            <tbody>
              <tr>
                <td align="center" valign="top">
                  <table dir="rtl" role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0 auto;">
                    <tbody>
                      <tr>
                        <th style="font-weight: normal;">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0 auto;">
                            <tbody>
                              <tr>
                                <td dir="ltr" valign="top" align="right" style="padding: 0;">
                                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="right" style="margin: 0 auto;">
                                    <tbody>
                                      <tr>
                                        <td width="28" align="left" valign="top">
                                          <a
                                            href="https://www.facebook.com/southernconvergence/"
                                            style="color: blue; margin: 0;"
                                            target="_blank"
                                            ><img
                                              src="https://pages.datastax.com/rs/259-IFZ-779/images/em-ds-white-facebook.png"
                                              width="28"
                                              alt="facebook"
                                              style="width: 28px; height: auto; display: block;"
                                          /></a>
                                        </td>
                                        <td width="14">&nbsp;</td>
                                        <td width="28" align="left" valign="top">
                                          <a
                                            href="https://www.linkedin.com/company/southern-convergence-technologies/?originalSubdomain=ph"
                                            style="color: blue; margin: 0;"
                                            target="_blank"
                                            ><img
                                              src="https://pages.datastax.com/rs/259-IFZ-779/images/em-ds-linkedin-white.png"
                                              width="28"
                                              alt="linkedin"
                                              style="width: 28px; height: auto; display: block;"
                                          /></a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </th>
                        <th width="340" style="font-weight: normal;">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0 auto;">
                            <tbody>
                              <tr>
                                <td dir="ltr" valign="top">
                                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 auto;">
                                    <tbody>
                                      <tr>
                                        <td width="110" align="left" valign="top">
                                          <a
                                            href="https://southernconvergence.com"
                                            style="color: blue; margin: 0;"
                                            target="_blank"
                                            ><img
                                              src="https://sctc-buckets.sgp1.cdn.digitaloceanspaces.com/SC-vector.png"
                                              width="110"
                                              alt="Southern Convergence"
                                              style="width: 110px; height: auto; display: block;"
                                          /></a>
                                        </td>
                                        <td width="15">&nbsp;</td>
                                        <td align="left" style="padding: 0; font-family: Verdana; font-size: 10px; line-height: 16px; color: white;">
                                          <p style="margin: 0;">
                                            © 2024 Southern Convergence Technologies Corporation. All rights reserved.
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</div>
`;
};

const HCD_REGISTRATION = (payload: any) => {
  return `
<!doctype html>
<html lang="en" dir="auto" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<title></title>
<!--[if !mso]><!-->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!--<![endif]-->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style type="text/css">

#outlook a{padding:0;}body{margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}table,td{border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;}img{border:0;height:auto;line-height:100%;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;}p{display:block;margin:0;}
</style>
<!--[if mso]> <noscript><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
<![endif]-->
<!--[if lte mso 11]>
<style type="text/css">

.y{width:100% !important;}
</style>
<![endif]-->
<!--[if !mso]><!-->
<link href="https://fonts.googleapis.com/css?family=Inter:700,400" rel="stylesheet" type="text/css">
<!--<![endif]-->
<style type="text/css">

@media only screen and (min-width:890px){.p{width:859px!important;max-width:859px;}.k{width:827px!important;max-width:827px;}}
</style>
<style media="screen and (min-width:890px)">.moz-text-html .p{width:859px!important;max-width:859px;}.moz-text-html .k{width:827px!important;max-width:827px;}
</style>
<style type="text/css">

u+.emailify .g-screen{background:#000;mix-blend-mode:screen;display:inline-block;padding:0;margin:0;}u+.emailify .g-diff{background:#000;mix-blend-mode:difference;display:inline-block;padding:0;margin:0;}p{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;}u+.emailify a{color:inherit!important;text-decoration:none!important;}#MessageViewBody a{color:inherit!important;text-decoration:none!important;}
@media only screen and (max-width:890px){.emailify{height:100%!important;margin:0!important;padding:0!important;width:100%!important;}u+.emailify .glist{margin-left:1em!important;}td.x{padding-left:0!important;padding-right:0!important;}div.r.e>table>tbody>tr>td,div.r.e>div>table>tbody>tr>td{padding-right:16px!important}div.r.ys>table>tbody>tr>td,div.r.ys>div>table>tbody>tr>td{padding-left:16px!important}}
</style>
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<!--[if gte mso 9]>
<style>a:link{mso-style-priority:99;color:inherit;text-decoration:none;}a:visited{mso-style-priority:99;color:inherit;text-decoration:none;}li{text-indent:-1em;}table,td,p,div,span,ul,ol,li,a,h1,h2,h3,h4,h5,h6{mso-hyphenate:none;}sup,sub{font-size: 100% !important;}
</style>
<![endif]-->
</head>
<body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#1e1e1e;"><div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
&shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;</div><div style="background-color:#1e1e1e;" lang="en" dir="auto">
<!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:891px;" width="891"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r e ys" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:891px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:859px;">
<![endif]--><div class="p y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" style="font-size:0;padding:0;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;"><tbody><tr><td style="width:63px;"> <img alt src="img/e4be367c591d14934ba57b94258a86ee.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="63" height="auto">
</td></tr></tbody></table>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:891px;" width="891"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r e ys" style="background:#ff7802;background-color:#ff7802;margin:0px auto;max-width:891px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ff7802;background-color:#ff7802;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:32px 32px 32px 32px;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:891px;" width="891"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r e ys" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:891px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:32px 32px 32px 32px;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:827px;">
<![endif]--><div class="k y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="left" class="x" style="font-size:0;padding-bottom:8px;word-break:break-word;"><div style="text-align:left;"><p style="Margin:0;text-align:left;mso-line-height-alt:32px;mso-ansi-font-size:28px;"><span style="font-size:28px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#000000;line-height:114%;mso-line-height-alt:32px;mso-ansi-font-size:28px;">Dear ${payload.firstName}</span></p></div>
</td></tr><tr><td align="left" class="x" style="font-size:0;padding-bottom:0;word-break:break-word;"><div style="text-align:left;"><p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">
Thank you for registering for our </span><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#000000;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">free exclusive event!</span><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;"> We&rsquo;re excited to have you join us as we explore cutting-edge innovations in data management, AI workloads, and real-time edge computing.</span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">&nbsp;</span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">You will receive a confirmation email with further event details in the next 48 hours. If you have any questions in the meantime, feel free to reach out us at info@southernconvergence.com.</span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">&nbsp;</span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">We look forward to seeing you at the event!</span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">&nbsp;</span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Warm regard,</span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">The SCTC Team</span></p></div>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]--></div>
</body>
</html>  
  `
} 

const HCD_INVITATION = (payload: any) => {
  return `
<!doctype html>
<html lang="en" dir="auto" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<title></title>
<!--[if !mso]><!-->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!--<![endif]-->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style type="text/css">

#outlook a{padding:0;}body{margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}table,td{border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;}img{border:0;height:auto;line-height:100%;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;}p{display:block;margin:0;}
</style>
<!--[if mso]> <noscript><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
<![endif]-->
<!--[if lte mso 11]>
<style type="text/css">

.y{width:100% !important;}
</style>
<![endif]-->
<!--[if !mso]><!-->
<link href="https://fonts.googleapis.com/css?family=Inter:700,400" rel="stylesheet" type="text/css">
<!--<![endif]-->
<style type="text/css">

@media only screen and (min-width:890px){.p{width:859px!important;max-width:859px;}.k{width:827px!important;max-width:827px;}}
</style>
<style media="screen and (min-width:890px)">.moz-text-html .p{width:859px!important;max-width:859px;}.moz-text-html .k{width:827px!important;max-width:827px;}
</style>
<style type="text/css">

u+.emailify .g-screen{background:#000;mix-blend-mode:screen;display:inline-block;padding:0;margin:0;}u+.emailify .g-diff{background:#000;mix-blend-mode:difference;display:inline-block;padding:0;margin:0;}p{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;}u+.emailify a{color:inherit!important;text-decoration:none!important;}#MessageViewBody a{color:inherit!important;text-decoration:none!important;}
@media only screen and (max-width:890px){.emailify{height:100%!important;margin:0!important;padding:0!important;width:100%!important;}u+.emailify .v{margin-left:1em!important;}td.x{padding-left:0!important;padding-right:0!important;}div.r.e>table>tbody>tr>td,div.r.e>div>table>tbody>tr>td{padding-right:16px!important}div.r.ys>table>tbody>tr>td,div.r.ys>div>table>tbody>tr>td{padding-left:16px!important}}
</style>
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<!--[if gte mso 9]>
<style>a:link{mso-style-priority:99;color:inherit;text-decoration:none;}a:visited{mso-style-priority:99;color:inherit;text-decoration:none;}li{text-indent:-1em;}table,td,p,div,span,ul,ol,li,a,h1,h2,h3,h4,h5,h6{mso-hyphenate:none;}sup,sub{font-size: 100% !important;}
</style>
<![endif]-->
</head>
<body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#1e1e1e;"><div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
&shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;</div><div style="background-color:#1e1e1e;" lang="en" dir="auto">
<!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:891px;" width="891"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r e ys" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:891px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:859px;">
<![endif]--><div class="p y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" style="font-size:0;padding:0;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;"><tbody><tr><td style="width:63px;"> <img alt src="https://e.hypermatic.com/461dec5582557f13e32a2c9269789071.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="63" height="auto">
</td></tr></tbody></table>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:891px;" width="891"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r e ys" style="background:#ff7802;background-color:#ff7802;margin:0px auto;max-width:891px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ff7802;background-color:#ff7802;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:32px 32px 32px 32px;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:891px;" width="891"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r e ys" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:891px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:32px 32px 32px 32px;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:827px;">
<![endif]--><div class="k y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="left" class="x" style="font-size:0;padding-bottom:8px;word-break:break-word;"><div style="text-align:left;"><p style="Margin:0;text-align:left;mso-line-height-alt:32px;mso-ansi-font-size:28px;"><span style="font-size:28px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#000000;line-height:114%;mso-line-height-alt:32px;mso-ansi-font-size:28px;">Join Us for an Exclusive Event: Unlock the Future of AI-Ready Data with Datastax Hyper-Converged Database</span></p></div>
</td></tr><tr><td align="left" class="x" style="font-size:0;padding-bottom:0;word-break:break-word;"><div style="text-align:left;"><p style="Margin:0;text-align:left;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Are you ready to transform your enterprise&rsquo;s data infrastructure to meet the demands of modern AI Applications? Don&rsquo;t miss this </span><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#020202;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">free opportunity </span><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">to explore how DataStax Hyper-Converge Database (HCD) is leading the way in integrating AI capabilities, hybrid cloud environments, and high-performance computing.</span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">&nbsp;</span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Event Details:</span></span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">&nbsp;<ul class="v" style="font-size:16px;font-family:'Inter','Arial',sans-serif;line-height:150%;color:#030303;padding:0;font-weight:700;Margin:0 0 0 22px;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Date: </span></li><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Time:</span></li><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Venue:</span></li></ul></span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">&nbsp;</span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Event Highlights:</span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">&nbsp;<ul class="v" style="font-size:16px;font-family:'Inter','Arial',sans-serif;line-height:150%;color:#030303;padding:0;font-weight:700;Margin:0 0 0 22px;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Revolutionize Your Data Management: </span><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Learn how DataStax&rsquo;s HCD leverages cutting-edge hyper-converged infrastructure to modernize enterprise data, enabling seamless scalability and elastic resource allocation.</span></li></ul></span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">&nbsp;<ul class="v" style="font-size:16px;font-family:'Inter','Arial',sans-serif;line-height:150%;color:#030303;padding:0;font-weight:700;Margin:0 0 0 22px;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Optimize Ai Workloads: </span><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Discover how to integrate AI and GenAI applications at scale using HCD&rsquo;s cloud-native architecture, which enhances performance and security, whether on-premises or across hybrid cloud environments.</span></li></ul></span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">&nbsp;<ul class="v" style="font-size:16px;font-family:'Inter','Arial',sans-serif;line-height:150%;color:#030303;padding:0;font-weight:700;Margin:0 0 0 22px;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Real-Time Edge Computing: </span><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Understand how DataStax HCD can power low-latency applications by extending compute power to the edge, perfect for industries relying on real-time data, including 5G edge computing and customer-focused services.</span></li></ul></span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">&nbsp;<ul class="v" style="font-size:16px;font-family:'Inter','Arial',sans-serif;line-height:150%;color:#030303;padding:0;font-weight:700;Margin:0 0 0 22px;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Hands-On Demos: </span><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Watch live demonstration of HCD&rsquo;s intuitive platform, showcasing its seamless integration with enterprise data environments, AI applications, and cloud infrastructure.</span></span></li></ul></span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">&nbsp;<ul class="v" style="font-size:16px;font-family:'Inter','Arial',sans-serif;line-height:150%;color:#030303;padding:0;font-weight:700;Margin:0 0 0 22px;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Network with Experts: </span><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Engage with industry leaders and peers, exchanging insights on the future of data infrastructure, AI advancements, and the evolution of hyper-converge architectures.</span></span></li></ul></span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">&nbsp;</span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">By attending this event, you&rsquo;ll gain exclusive insights into how DataStax HCD empowers enterprises to mange data more efficiently and scale their AI-driven applications faster than ever before.</span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">&nbsp;</span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#070707;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Why attend?</span></span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#070707;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">&nbsp;<ul class="v" style="font-size:16px;font-family:'Inter','Arial',sans-serif;line-height:150%;color:#777777;padding:0;font-weight:400;Margin:0 0 0 22px;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Learn how to modernize your data infrastructure with hyper-converged technologies</span></span></li><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">See how to scale AI and generative AI workloads for real-time responsiveness</span></li><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Explore the future of hybrid and edge computing for mission-critical application</span></li></ul></span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">&nbsp;</span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#070707;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">Spaces are limited, so register for free today and secure your spot!</span></span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#070707;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">&nbsp;</span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#777777;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#3305ed;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">>>link here<<<</span></span></p><p style="Margin:0;mso-line-height-alt:24px;mso-ansi-font-size:16px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#3305ed;line-height:150%;mso-line-height-alt:24px;mso-ansi-font-size:16px;">&nbsp;</span></p></div>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]--></div>
</body>
</html>
  `
}

export const MAIL_TEMPLATES = {
  CONTACT_US_FORM_TEMPLATE,
  EVENT_REGISTRATION_TEMPLATE,
  DEVJAM_QUEUE_MAIL_TEMPLATE,
  HCD_REGISTRATION,
  HCD_INVITATION
};
