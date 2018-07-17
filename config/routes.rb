Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :teams, only: [:create, :update, :show, :destroy]
    resources :team_memberships, only: [:create, :destroy, :update]
    resources :projects, only: [:create, :update, :destroy]
  end

end
