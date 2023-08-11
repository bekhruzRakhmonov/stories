Rails.application.routes.draw do
  root "pages#home"
  get '/thanks', to: 'pages#thanks'
  get "/about", to: "pages#about", as: :about
  get "/signup", to: "signups#new", as: :signup
  post "/signup", to: "signups#create", as: :signup_create

end
