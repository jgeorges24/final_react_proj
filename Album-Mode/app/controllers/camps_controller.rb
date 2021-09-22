class CampsController < ApplicationController

    def index
        camps = Camp.all

        render json: camps.to_json(:include => :videos)
    end





end
