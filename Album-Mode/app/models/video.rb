class Video < ApplicationRecord
    # belongs_to :rapper
    has_and_belongs_to_many :camps
end
