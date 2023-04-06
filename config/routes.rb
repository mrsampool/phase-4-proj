Rails.application.routes.draw do
  
  resources :punchcards, only: [:index, :show, :create, :destroy, :update]
  resources :customers, only: [:index, :show, :create, :destroy, :update]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
