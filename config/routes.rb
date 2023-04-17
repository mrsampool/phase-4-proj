Rails.application.routes.draw do
  
  resources :punchcards
  resources :customers 

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'


  # self challenges below

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end