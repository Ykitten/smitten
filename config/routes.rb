FinalProject::Application.routes.draw do



  match 'users/auth/:service/callback' => 'services#create'
  resources :services, :only => [:index, :create, :destroy]
  resources :sparks, :only => [:index, :new, :create]

  devise_for :users, controllers: {omniauth_callbacks: "omniauth_callbacks"}


  root :to => 'home#index'

end

