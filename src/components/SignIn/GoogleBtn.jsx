import React, { useCallback, useEffect } from 'react'
import GoogleLogin from 'react-google-login'
import { gapi } from 'gapi-script'
import '~/index.css'

const clientId =
  '560053142694-jjm6hrkbsomh91oupj4arim0vri4tt1d.apps.googleusercontent.com'

const GoogleBtn = ({ onSocial }) => {
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId,
        scope: 'email',
      })
    }
    gapi.load('client:auth2', start)
  }, [])

  const onSuccess = (response) => {
    console.log(response)
  }
  const onFailure = (response) => {
    console.log(response)
  }
  return (
    <div className="mt-3">
      <GoogleLogin
        className="w-full mt-6 googleBtn"
        clientId={clientId}
        buttonText="Googleでログイン"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  )
}

export default GoogleBtn
