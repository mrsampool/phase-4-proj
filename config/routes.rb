Rails.application.routes.draw do
  resources :punchcards
    # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  # full CRUD will be 'resources: commands' or whatever model needed


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
