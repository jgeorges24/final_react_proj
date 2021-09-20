class VideosController < ApplicationController

    def index

        videos = Video.all.order(id: :desc)
        render json: videos, except: [:created_at, :updated_at]


    end


    def update

        video = Video.find(params[:id])

        if video.update(video_params)
            render json: Video.all.to_json(:include => :rapper)
        else
            
        end


    end

    #create those routes to account 
    def create 
        # binding.pry

        video = Video.new(video_params)
         if video.save
            render json: video
         else
             render json: {error: "error This did not save my bro!"}
             console.log("error This did not save my bro!")
         end
        #render json: videos.to_json(:include => :rapper)

    end



    private

    def video_params

        params.require(:video).permit( :song, :director, :cover_art, :rapper)

    end



end
