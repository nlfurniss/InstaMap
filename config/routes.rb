Instamap::Application.routes.draw do

  root to: 'pages#index'
  match '/locations', to: 'pages#locations'
  match '/locations/:id', to: 'pages#locations'
  match '/location/:id', to: 'pages#location'
  
  # Routes to Instagram Authorization
  match '/instagram/authorize', to: 'auth#authorize'
  match '/instagram/redirect', to: 'auth#redirect'

  namespace :api do
    namespace :v1 do
      resources :search, only: [:index, :show ]
      resources :locations, only: [:show]
      resources :users, only: [:show] do
        member do
          get 'like' => :like
        end
      end
    end
  end

end
