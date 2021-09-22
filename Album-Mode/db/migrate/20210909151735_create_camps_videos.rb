class CreateCampsVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :camps_videos do |t|
      t.belongs_to :camp
      t.belongs_to :video

      t.timestamps
    end
  end
end
