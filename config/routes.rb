Rails.application.routes.draw do
  
  resources :punchcards
  
  resources :customers 

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  get '/greater_than/:num', to: 'customers#greater_than_num'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end