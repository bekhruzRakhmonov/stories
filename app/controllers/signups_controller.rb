class SignupsController < ApplicationController
    skip_before_action :verify_authenticity_token
 
    def new
        @signup = Signup.new
    end

    def create
        @signup = Signup.new(signup_params)
        if @signup.save
            redirect_to :thanks
        else
          render :new
        end
    end

    private
    def signup_params
        params.require(:signup).permit(:name, :email, :message)
    end
end
