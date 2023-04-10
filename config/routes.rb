Rails.application.routes.draw do
  
  resources :punchcards
  resources :customers

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  get '/punchcards/count/:number', to: 'punchcards#count'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


# 1. creating a custom route, dynamic paramter, will map to a new action in the punchcards controller