class RappersController < ApplicationController

    def index
        rappers = Rapper.all
        render json: Videos.to_json(:include => :rapper)
    end

    def create

        rapper = Rapper.new(rapper_params)
        if rapper.save
            render json: Video.all.to_json(:include => :rapper)
        else
            render json: {error: "error with opinion!"}
            

        end

    end

    private
def rapper_params

    params.require(:rapper).permit(:name, :age, :zipcode, :rapper_id)
end

end
