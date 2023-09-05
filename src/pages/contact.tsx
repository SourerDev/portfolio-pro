import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { Typography } from '@material-tailwind/react'
import Head from 'next/head'
import { useReducer } from 'react'
import { MainInput, MainTextArea } from '~/components/Input'
import { ContainerPage } from '~/components/container_page'
import { send } from 'emailjs-com'

enum ActionTypes {
  SET_NAME,
  SET_EMAIL,
  SET_MESSAGE,
  RESET,
}

const initialState = {
  name: '',
  email: '',
  message: '',
}

function reducer(
  state: typeof initialState,
  action: { payload: string; type: ActionTypes }
) {
  switch (action.type) {
    case ActionTypes.SET_NAME:
      return { ...state, name: action.payload }
    case ActionTypes.SET_EMAIL:
      return { ...state, email: action.payload }
    case ActionTypes.SET_MESSAGE:
      return { ...state, message: action.payload }
    case ActionTypes.RESET:
      return { ...initialState }

    default:
      throw new Error()
  }
}

export default function ContactMe() {
  const [state, dispatch] = useReducer(reducer, initialState)

  function handleSubmit() {
    send(`default_service`, `template_bakvvun`, state, `ptr6CixDah4R-FpE-`)
      .then((res) => {
        console.log('SUCCESS!', res.status, res.text)
        dispatch({ payload: '', type: ActionTypes.RESET })
      })
      .catch((err) => {
        console.log('FAILED...', err)
      })
  }
  return (
    <>
      <Head>
        <title>Sourer Dev | Contact me</title>
        <meta name="description" content="Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContainerPage>
        <main className="flex min-h-[90vh] flex-col justify-center">
          <Typography variant="h1">Contact me</Typography>

          <p className="mt-2 flex flex-col">
            <span> Have a Question? or Just want to say Hi?</span>
            <span>Drop me a message!</span>
          </p>
          <div className="my-10 flex flex-col gap-5 sm:flex-row">
            <MainInput
              label="Name"
              placeholder="your name"
              value={state.name}
              onChange={({ target }) =>
                dispatch({ payload: target.value, type: ActionTypes.SET_NAME })
              }
            />
            <MainInput
              label="Email"
              placeholder="example@example.ex"
              value={state.email}
              onChange={({ target }) =>
                dispatch({ payload: target.value, type: ActionTypes.SET_EMAIL })
              }
            />
          </div>
          <div className="my-5">
            <MainTextArea
              label="Message"
              placeholder="Enter your message here"
              value={state.message}
              onChange={({ target }) =>
                dispatch({
                  payload: target.value,
                  type: ActionTypes.SET_MESSAGE,
                })
              }
            />
          </div>
          <button
            className="group flex items-center gap-2 self-end rounded-md bg-primary py-3 pl-4 pr-5 font-medium text-text-dk hover:scale-105 hover:shadow-md"
            onClick={handleSubmit}
          >
            <PaperAirplaneIcon className="h-5 w-5 " />
            Send
          </button>
        </main>
      </ContainerPage>
    </>
  )
}
