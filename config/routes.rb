Rails.application.routes.draw do
  resources :posts
  resources :users

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get '/me', to: "users#show"
  get '/signup', to: "users#create"
  post "/login", to: "sessions#login"
  delete '/logout', to: "sessions#logout"

end
