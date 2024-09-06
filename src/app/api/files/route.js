import { ARKIVE_API } from 'src/config-global'

export async function POST(req) {
  console.log(req)

  const body = await req.json()
  console.log(body)

  return new Response(JSON.stringify(true))
  try {
    const formdata = new FormData()
    console.log(formdata)
    // formdata.append(body.nam, body.file)

    const res = await fetch(ARKIVE_API.BASE_URL + '/files/', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'multipart/form-dat',
      },
      body: formdata,
      redirect: 'follow',
    })

    console.log(res)

    return new Response(JSON.stringify(res.ok))
  } catch (error) {
    return new Response(JSON.stringify(false))
  }
}
