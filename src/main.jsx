import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyFirstComponent from './MyFirstComponent.jsx'
import './index.css'


import ExampleComponentCaller from './components/M6-Slide19-ExampleComponent-Caller.jsx'
import WelcomeCaller from './components/M6-Slide21-Welcome-Caller.jsx'
import PropsDisplayerCaller from './components/M6-Slide26-PropsDisplayer-Caller.jsx'
import PetCaller from './components/M6-Slide31-Pet-Caller.jsx'
import MoviesList from './components/M6-Slide43-MoviesList.jsx'
import MoodChanger from './components/M6-Slide51-MoodChanger-state.jsx'
import MoodChanger1 from './components/M6-Slide56-MoodChanger-EventHandler.jsx'
import BirthdayTranslator from './components/M6-Slide61-BirthdayTranslator-state-variables.jsx'
import Weather from './components/M6-Slide66-Weather-LiftingUp-State.jsx'
import MoviesListReverse from './components/M6-Slide69-MoviesList.jsx'
import LoginForm from './components/M6-Slide74-LoginForm.jsx'
import AddMoviesInList from './components/M6-Slide79-AddMovieInList.jsx'

import ErrorMessage from './components/M6-Slide82-ErrorMessage.jsx'
import ExplodingError from './components/M6-Slide83-ExplodingError.jsx'
import { ErrorBoundary } from 'react-error-boundary'

import Clock from './components/M7-Slide8-UseEffectHook.jsx'

import ClockDisplay from './components/M7-Slide9-ClockDisplay.jsx'
import ActivityFinder from './components/M7-Slide11-ActivityFinder.jsx'
import RefCounter from './components/M7-Slide16-UseRefHook.jsx'
import ReducerCounter from './components/M7-Slide21-ReducerCounter.jsx'
import PostListReducer from './components/M7-Slide23-PostListReducer.jsx'
import SubscribeForm from './components/M7-Slide29-SubscribeForm.jsx'
import ActivityFinderCustomHook from './components/M7-Slide31-ActivityFinderCustomHook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    {/* 
      //module 6
      <MyFirstComponent />
      <App />
      <ExampleComponentCaller />
      <WelcomeCaller />
      <PropsDisplayerCaller />
      <PetCaller />
      <MoviesList />
      <MoodChanger />
      <MoodChanger1 />
      <BirthdayTranslator />
      <Weather />
      <MoviesListReverse />
      <LoginForm />
      <AddMoviesInList />

      <ErrorBoundary FallbackComponent={ErrorMessage}>
        <ExplodingError />
      </ErrorBoundary>

      //module 7
      <Clock />
      <ClockDisplay />
      <ActivityFinder />
      <RefCounter />
      <ReducerCounter />
      <PostListReducer />
      <SubscribeForm />
      <ActivityFinderCustomHook />
    */}

    
    <ActivityFinderCustomHook />

  </React.StrictMode>,
)
